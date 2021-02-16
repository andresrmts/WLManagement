import React, { Component } from 'react';
import Navigation from './components/Navigation';
import AppRouter from './components/AppRouter';
import './App.css';
import { AuthProvider } from './AuthContext';
import { BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchBox: '',
    };
  }

  onSearchChange = e => {
    this.setState({ searchBox: e.target.value });
  };

  render() {
    return (
      <AuthProvider>
        <Router>
          <Navigation />
          <AppRouter onSearchChange={this.onSearchChange} />
        </Router>
      </AuthProvider>
    );
  }
}

export default App;
