import React from 'react';
import PendingRegistrationsList from '../Registrations/PendingRegistrationsList/PendingRegistrationsList';

class RegisteredOfficials extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	render() {
		return (
			<PendingRegistrationsList acceptedRegistrations={this.props.acceptedRegistrations} />
		)
	}
}

export default RegisteredOfficials;