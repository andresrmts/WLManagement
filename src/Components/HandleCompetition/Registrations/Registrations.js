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
			<div>
				<div className="tc pa5 pb0 flex flex-nowrap">
					<div className="fl w-100 w-third-ns pa2 tc bl br bb">
						<p>Name</p>
					</div>
					<div className="fl w-100 w-third-ns pa2 tc bl br bb">
						<p>Role</p>
					</div>
					<div className="fl w-100 w-third-ns pa2 tc bl br bb">
						<p>Approve</p>
					</div>
				</div>
				<PendingRegistrationsList approveRemove={this.approveRemove} registrations={this.props.registrations} />
			</div>
		)
	}
}

export default Registrations;