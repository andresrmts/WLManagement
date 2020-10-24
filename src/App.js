import React, { Component } from 'react';
import Navigation from './Components/Navigation';
import CompetitionSelection from './Components/CompetitionSelection';
import Register from './Components/Register';
import SignIn from './Components/SignIn';
import CompetitionCreation from './Components/CompetitionCreation';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'signin',
      isSignedIn: false,
      searchBox: ''
    }
  }

  onRouteChange = (route) => {
    if (route === 'signin' || route === 'register') {
      this.setState({isSignedIn: false})
    } else {
      this.setState({isSignedIn: true});
    }
    this.setState({route: route});
  }

  onSearchChange = (e) => {
    this.setState({searchBox: e.target.value})
    console.log(this.state.searchBox);
  }

  render() {
    const { route, isSignedIn } = this.state;
    return (
      <div>
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
        { route === 'competitionselection'
          ?
          <CompetitionSelection onRouteChange={this.onRouteChange} onSearchChange={this.onSearchChange} />
          :
          (
            route === 'competitioncreation'
            ?
            <CompetitionCreation onRouteChange={this.onRouteChange} />
            :
            (
              route === 'signin'
              ?
              <SignIn onRouteChange={this.onRouteChange} />
              :
              <Register onRouteChange={this.onRouteChange} />
            )
          )
        }
      </div>
    )
  }
}

export default App;
