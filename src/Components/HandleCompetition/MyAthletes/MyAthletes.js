import React from 'react';
import AthleteList from '../AthleteList/AthleteList';

const MyAthletes = ({ registeredAthletes }) => {
	return (
		<AthleteList registeredAthletes={registeredAthletes} />
	)
}

export default MyAthletes;