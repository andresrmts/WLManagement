import React from 'react';
import PendingRegistrationsList from '../Registrations/PendingRegistrationsList/PendingRegistrationsList';

const RegisteredOfficials = ({ acceptedRegistrations }) => {
	return (
		<PendingRegistrationsList acceptedRegistrations={acceptedRegistrations} />
	)
}

export default RegisteredOfficials;