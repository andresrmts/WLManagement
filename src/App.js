import React, { Component } from 'react';
import Navigation from './Components/Navigation/Navigation';
import CompetitionSelection from './Components/CompetitionSelection/CompetitionSelection';
import Register from './Components/Register/Register';
import SignIn from './Components/SignIn/SignIn';
import CompetitionCreation from './Components/CompetitionCreation/CompetitionCreation';
import HandleCompetition from './Components/HandleCompetition/HandleCompetition';
import RoleSelection from './Components/RoleSelection/RoleSelection';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'signin',
      isSignedIn: false,
      searchBox: '',
      admin: false,
      user: {
        id: '',
        name: 'Piibe Pullerits',
        email: 'Shanna@melissa.tv'
      }
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

  adminToggle = (admin) => {
    this.setState({admin: admin})
  }

  onSearchChange = (e) => {
    this.setState({searchBox: e.target.value})
  }

  renderRoute = (route) => {
    const { admin } = this.state;
    switch(route) {
      case 'competitionselection':
        return <CompetitionSelection adminToggle={this.adminToggle} useremail={this.state.user.email} name={this.state.user.name} onRouteChange={this.onRouteChange} onSearchChange={this.onSearchChange} />
      case 'competitioncreation':
        return <CompetitionCreation adminToggle={this.adminToggle} onRouteChange={this.onRouteChange} />
      case 'signin':
        return <SignIn onRouteChange={this.onRouteChange} />
      case 'register':
        return <Register onRouteChange={this.onRouteChange} />
      case 'competition':
        return <HandleCompetition name={this.state.user.name} adminToggle={this.adminToggle} onRouteChange={this.onRouteChange} isAdmin={admin} />
      case 'roleselection':
        return <RoleSelection onRouteChange={this.onRouteChange} />
      default:
        return <h1>Oops, something went wrong....</h1>
    }
  }

  render() {
    const { route, isSignedIn } = this.state;
    return (
      <div>
        <Navigation adminToggle={this.adminToggle} isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
        { this.renderRoute(route) }
      </div>
    )
  }
}

export default App;
