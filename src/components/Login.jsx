import React, { useState } from 'react';
import { Leaf } from 'lucide-react';

const Login = ({ onLogin, onCancel }) => {
  const [studentId, setStudentId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (studentId.trim().length > 0) {
      onLogin(studentId);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="glass-card w-full max-w-md p-8 flex flex-col items-center">
        <div className="w-16 h-16 bg-eco-medium rounded-full flex items-center justify-center mb-6">
          <Leaf className="text-eco-light" size={32} />
        </div>
        
        <h1 className="text-2xl font-bold text-center mb-2">Student Login</h1>
        <p className="text-gray-400 text-center mb-8">
          Enter your student ID to access the project tracker
        </p>

        <form onSubmit={handleSubmit} className="w-full">
          <div className="mb-6">
            <label htmlFor="studentId" className="block text-sm font-medium text-gray-300 mb-2">
              Student ID
            </label>
            <input
              type="text"
              id="studentId"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              className="w-full bg-eco-dark/50 border border-eco-medium rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-eco-light focus:border-transparent transition-all"
              placeholder="e.g. STU12345"
              required
            />
          </div>

          <div className="flex flex-col gap-3">
            <button
              type="submit"
              className="w-full bg-eco-light hover:bg-eco-accent text-eco-dark font-bold py-3 px-4 rounded-xl transition-colors duration-300 flex items-center justify-center shadow-lg shadow-eco-light/20"
            >
              Access Tracker
            </button>
            {onCancel && (
              <button
                type="button"
                onClick={onCancel}
                className="w-full bg-transparent border border-gray-600 hover:border-gray-400 text-gray-300 font-bold py-3 px-4 rounded-xl transition-colors duration-300 flex items-center justify-center"
              >
                Back to Dashboard
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
