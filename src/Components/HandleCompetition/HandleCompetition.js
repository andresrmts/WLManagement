import React from 'react';
import AdminNav from './AdminNav/AdminNav';
import Registrations from './Registrations/Registrations';
import AthleteList from './AthleteList/AthleteList';

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
				return <Registrations />
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
				<h1>Ma olen keegi muu</h1>
			)
		}
	}
}

export default HandleCompetition;