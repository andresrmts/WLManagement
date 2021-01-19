import React from 'react';
import PendingRegistrationsList from './PendingRegistrationsList/PendingRegistrationsList';

const Registrations = ({ approveRemove, registrations }) => {
	return (
		<PendingRegistrationsList approveRemove={approveRemove} registrations={registrations} />
	)
}

export default Registrations;