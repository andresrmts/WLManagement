import React from 'react';
import PendingRegistrationsList from './PendingRegistrationsList/PendingRegistrationsList';

class Registrations extends React.Component {
	constructor() {
		super();
		this.state = {
			registrations: [
				{
					name: 'Andres Riimets',
					role: 'coach'
				},
				{
					name: 'Piibe Pullerits',
					role: 'judge'
				}
			]
		}
	}

	approveRemove = (decision, name) => {
		const {registrations} = this.state;
		if (decision === 'yes') {
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
				<PendingRegistrationsList approveRemove={this.approveRemove} registrations={this.state.registrations} />
			</div>
		)
	}
}

export default Registrations;