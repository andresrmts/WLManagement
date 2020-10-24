import React from 'react';
import AdminNav from './AdminNav/AdminNav';

const HandleCompetition = ({isAdmin}) => {
	if (isAdmin) {
		return (
			<AdminNav />
		)
	} else {
		return (
			<h1>Ma olen keegi muu</h1>
		)
	}
}

export default HandleCompetition;