import React, { Component } from 'react';
import Navigation from './Components/Navigation';
import CompetitionSelection from './Components/CompetitionSelection';
import Register from './Components/Register';
import SignIn from './Components/SignIn';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <SignIn />
        <Register />
        <CompetitionSelection />
      </div>
    )
  }
}

export default App;
