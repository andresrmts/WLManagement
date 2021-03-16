import React from 'react';
import Navigation from './components/Navigation';
import AppRouter from './components/AppRouter';
import './App.css';
import { AuthProvider } from './AuthContext';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navigation />
        <AppRouter />
      </Router>
    </AuthProvider>
  );
};

export default App;
