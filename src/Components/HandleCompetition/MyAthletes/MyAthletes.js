import React from 'react';
import AthleteList from '../AthleteList/AthleteList';

const MyAthletes = ({ coachAthletes, coachName, editAthleteWeight }) => {
	return (
			<AthleteList editAthleteWeight={editAthleteWeight} registeredAthletes={coachAthletes} />
	)
}

export default MyAthletes;