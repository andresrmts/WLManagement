import React from 'react';
import Registration from './Registration/Registration';

const PendingRegistrationList = ({acceptedRegistrations, approveRemove, registrations}) => {
	if (registrations) {
		return (
			<div>
				{
					registrations.map((reg, i) => {
						return (
							<Registration 
								key={i}
								name={registrations[i].name}
								role={registrations[i].role}
								approveRemove={approveRemove}
							/>
						)
					})
				}
			</div>
		)
	} else if (acceptedRegistrations) {
		return (
			<div>
				{
					acceptedRegistrations.map((reg, i) => {
						return (
							<Registration 
								key={i}
								name={acceptedRegistrations[i].name}
								role={acceptedRegistrations[i].role}
							/>
						)
					})
				}
			</div>
		)
	}
}

export default PendingRegistrationList;