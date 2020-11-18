import React from 'react';
import AthleteList from '../AthleteList/AthleteList';

const MyAthletes = ({ coachAthletes, coachName }) => {
	return (
		<AthleteList registeredAthletes={coachAthletes} />
	)
}

export default MyAthletes;