import React, { Component } from 'react';
import Navigation from './Components/Navigation/Navigation';
import Register from './Components/Register/Register';
import SignIn from './Components/SignIn/SignIn';
import HandleCompetition from './Components/HandleCompetition/HandleCompetition';
import AppRouter from './Components/AppRouter/AppRouter'
import './App.css';
import { Router, Route, Link } from './Components/router/';
import { routes } from './Components/router/routes';

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
        name: 'Andres Riimets',
        email: ''
      }
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

  // renderRoute = (route) => {
  //   const { admin, user } = this.state;
  //   switch(route) {
  //     case 'competitionselection':
  //       return <CompetitionSelection 
  //         adminToggle={this.adminToggle}
  //         user={user} 
  //         setSignedIn={this.setSignedIn} 
  //         onSearchChange={this.onSearchChange} />
  //     case 'competitioncreation':
  //       return <CompetitionCreation 
  //         adminToggle={this.adminToggle} 
  //         setSignedIn={this.setSignedIn} />
  //     case 'signin':
  //       return <SignIn setSignedIn={this.setSignedIn} />
  //     case 'register':
  //       return <Register setSignedIn={this.setSignedIn} />
  //     case 'competition':
  //       return <HandleCompetition 
  //         name={user.name} 
  //         adminToggle={this.adminToggle} 
  //         setSignedIn={this.setSignedIn} 
  //         isAdmin={admin} />
  //     default:
  //       return <h1>Oops, something went wrong....</h1>
  //   }
  // }

  render() {
    const { isSignedIn, user, admin } = this.state;
    return (
        <Router routes={routes} NotFound={this.notFound} >
          <Navigation adminToggle={this.adminToggle} isSignedIn={isSignedIn} setSignedIn={this.setSignedIn} />
          <AppRouter isAdmin={admin} onSearchChange={this.onSearchChange} adminToggle={this.adminToggle} setSignedIn={this.setSignedIn} user={user} />
        </Router>
    )
  }
}

export default App;
