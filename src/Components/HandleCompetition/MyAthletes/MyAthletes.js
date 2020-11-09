import React from 'react';
import AthleteList from '../AthleteList/AthleteList';

const MyAthletes = ({ registeredAthletes, coachName }) => {
	const onlyCoachAthletes = registeredAthletes.filter(athlete => athlete.coachname === coachName)
	return (
		<AthleteList registeredAthletes={onlyCoachAthletes} />
	)
}

export default MyAthletes;