import React from 'react';
import AdminNav from './AdminNav/AdminNav';
import Registrations from './Registrations/Registrations';
import AthleteList from './AthleteList/AthleteList';
import CoachNav from './CoachNav/CoachNav';
import MyAthletes from './MyAthletes/MyAthletes';

class HandleCompetition extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			comproute: 'home'
		}
	}

	changeCompRoute = (route) => {
		this.setState({comproute: route})
	}

	renderAdminRoutes = (route) => {
		switch(route) {
			case 'home':
				if (this.props.isAdmin) {
					return <Registrations />
				} else {
					return <MyAthletes />
				}
			case 'athletelist':
				return <AthleteList />
			default:
				return <h1>Something went wrong...</h1>
		}
	}

	

	render() {
		const { onRouteChange, adminToggle, isAdmin} = this.props;
		const { comproute } = this.state;
		if (isAdmin) {
			return (
				<div>
					<h1>You are currently working on COMPETITIONNAME</h1>
					<AdminNav compRoute={this.changeCompRoute} adminToggle={adminToggle} onRouteChange={onRouteChange} />
					{this.renderAdminRoutes(comproute)}
				</div>
			)
		} else {
			return (
				<div>
					<h1>You are currently coach NAME</h1>
					<CoachNav onRouteChange={onRouteChange}/>
				</div>
			)
		}
	}
}

export default HandleCompetition;