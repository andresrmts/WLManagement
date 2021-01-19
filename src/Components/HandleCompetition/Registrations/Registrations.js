import React from 'react';
import PendingRegistrationsList from './PendingRegistrationsList/PendingRegistrationsList';

class Registrations extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			
		}
	}

	approveRemove = (decision, name, role) => {
		let splicedArray;
		const {registrations, acceptedRegistrations} = this.props;
		if (decision === 'yes' && role === 'judge') {
			if (acceptedRegistrations.filter(judge => judge.role === 'judge').length < 3) {
				splicedArray = registrations.splice(registrations.findIndex(participant => participant.name === name), 1);
				acceptedRegistrations.push(splicedArray[0]);
				this.setState({registrations: registrations});
			} else {
				alert('There already are 3 judges in the competition')
			}
		} else if (decision === 'yes') {
			splicedArray = registrations.splice(registrations.findIndex(participant => participant.name === name), 1);
			acceptedRegistrations.push(splicedArray[0]);
			this.setState({registrations: registrations});
		} else {
			registrations.splice(registrations.findIndex(participant => participant.name === name), 1);
			this.setState({registrations: registrations});
		}
	}

	render() {
		return (
			<PendingRegistrationsList approveRemove={this.approveRemove} registrations={this.props.registrations} />
		)
	}
}

export default Registrations;