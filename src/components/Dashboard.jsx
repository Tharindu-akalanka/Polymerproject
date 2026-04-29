import React, { useState, useEffect } from 'react';
import { LogOut, RotateCcw, Leaf, LogIn } from 'lucide-react';
import CircularProgress from './CircularProgress';
import StepCard from './StepCard';
import { INITIAL_STEPS } from '../data/steps';

const Dashboard = ({ isAuthenticated, studentId, onLogout, onLoginClick }) => {
  const [steps, setSteps] = useState(() => {
    const savedSteps = localStorage.getItem('projectSteps');
    return savedSteps ? JSON.parse(savedSteps) : INITIAL_STEPS;
  });

  useEffect(() => {
    localStorage.setItem('projectSteps', JSON.stringify(steps));
  }, [steps]);

  const toggleStep = (id) => {
    if (!isAuthenticated) {
      alert("Please login as a team member to update progress.");
      return;
    }
    setSteps(steps.map(step => 
      step.id === id ? { ...step, completed: !step.completed } : step
    ));
  };

  const handleUpload = (id, fileName) => {
    if (!isAuthenticated) return;
    setSteps(steps.map(step => 
      step.id === id ? { ...step, attachment: fileName } : step
    ));
  };

  const resetProgress = () => {
    if (window.confirm('Are you sure you want to reset all progress?')) {
      setSteps(INITIAL_STEPS);
    }
  };

  const completedCount = steps.filter(step => step.completed).length;
  const progressPercentage = (completedCount / steps.length) * 100;

  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <header className="bg-eco-dark/80 backdrop-blur-md border-b border-eco-medium sticky top-0 z-10 px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Leaf className="text-eco-light" size={24} />
          <h1 className="font-bold text-lg hidden sm:block text-white">EcoMat Project</h1>
        </div>
        <div className="flex items-center gap-4">
          {isAuthenticated ? (
            <>
              <button 
                onClick={resetProgress}
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
              >
                <RotateCcw size={18} />
                <span className="hidden sm:inline">Reset</span>
              </button>
              <button 
                onClick={onLogout}
                className="flex items-center gap-2 text-sm text-red-400 hover:text-red-300 transition-colors"
              >
                <LogOut size={18} />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </>
          ) : (
            <button 
              onClick={onLoginClick}
              className="flex items-center gap-2 text-sm bg-eco-light/10 text-eco-light hover:bg-eco-light hover:text-eco-dark px-4 py-2 rounded-lg transition-colors font-semibold"
            >
              <LogIn size={18} />
              <span>Team Login</span>
            </button>
          )}
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-8">
        {/* Project Info & Progress */}
        <div className="glass-card p-6 mb-8 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl font-bold text-white mb-2">
              Sustainable Gym Mat Development Project
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Developing an eco-friendly multi-layer gym mat using recycled materials including tire rubber, EVA waste, fabric fibers, and RSS rubber.
            </p>
            <div className="inline-flex items-center gap-2 bg-eco-medium/50 px-4 py-2 rounded-full border border-eco-medium text-eco-light font-semibold">
              {completedCount} of {steps.length} Steps Completed
            </div>
          </div>
          <div className="flex-shrink-0">
            <CircularProgress percentage={progressPercentage} />
          </div>
        </div>

        {/* Steps List */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white mb-4 px-2">Project Roadmap</h3>
          <div className="flex flex-col gap-3">
            {steps.map((step) => (
              <StepCard 
                key={step.id} 
                step={step} 
                isAuthenticated={isAuthenticated}
                onToggle={toggleStep} 
                onUpload={handleUpload}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
