import React from 'react';
import AdminNav from './AdminNav/AdminNav';

class HandleCompetition extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	render() {
		if (this.props.isAdmin) {
			return (
				<AdminNav />
			)
		} else {
			return (
				<h1>Ma olen keegi muu</h1>
			)
		}
	}
}

export default HandleCompetition;