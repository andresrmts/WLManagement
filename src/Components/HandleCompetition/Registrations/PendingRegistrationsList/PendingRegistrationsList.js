import React from 'react';
import Registration from './Registration/Registration';

const PendingRegistrationList = ({approveRemove, registrations}) => {
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
}

export default PendingRegistrationList;