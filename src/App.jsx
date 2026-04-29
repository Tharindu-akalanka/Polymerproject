import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [studentId, setStudentId] = useState(null);
  const [currentView, setCurrentView] = useState('dashboard');

  useEffect(() => {
    const savedUser = localStorage.getItem('ecoMatStudent');
    if (savedUser) {
      setIsAuthenticated(true);
      setStudentId(savedUser);
    }
  }, []);

  const handleLogin = (id) => {
    localStorage.setItem('ecoMatStudent', id);
    setStudentId(id);
    setIsAuthenticated(true);
    setCurrentView('dashboard');
  };

  const handleLogout = () => {
    localStorage.removeItem('ecoMatStudent');
    setStudentId(null);
    setIsAuthenticated(false);
  };

  return (
    <div className="min-h-screen bg-eco-bg font-sans selection:bg-eco-light/30">
      {currentView === 'login' ? (
        <Login onLogin={handleLogin} onCancel={() => setCurrentView('dashboard')} />
      ) : (
        <Dashboard 
          isAuthenticated={isAuthenticated}
          studentId={studentId}
          onLogout={handleLogout} 
          onLoginClick={() => setCurrentView('login')}
        />
      )}
    </div>
  );
}

export default App;
