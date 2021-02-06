import React, { Component } from 'react';
import Navigation from './components/Navigation';
import AppRouter from './components/AppRouter';
import './App.css';
import { Router, Link } from './Router';
import { routes } from './Router/routes';
import { AuthProvider } from './AuthContext';

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchBox: '',
    }
  }

  setSignedIn = (location) => {
		if (location === '/' || location === '/register') {
			this.setState({isSignedIn: false})
		} else {
      this.setState({isSignedIn: true})
    }
  }

  adminToggle = (admin) => {
    this.setState({admin: admin})
  }

  onSearchChange = (e) => {
    this.setState({searchBox: e.target.value})
  }

  notFound = () => {
    return (
      <div>
        <p>404 - Not Found</p>
        <Link to={routes.home.path}>Back to home</Link>
      </div>
    )
  }

  render() {
    return (
      <AuthProvider>
        <Router routes={routes} NotFound={this.notFound} >
          <Navigation />
          <AppRouter onSearchChange={this.onSearchChange} />
        </Router>
      </AuthProvider>
    )
  }
}

export default App;
