import React from 'react';
import AthleteList from '../AthleteList/AthleteList';
import Table from '../../Table/Table';

const MyAthletes = ({ coachAthletes, coachName, editAthleteWeight }) => {
	const headers = [
		{
			header: 'Name',
			styles: 'fw6 pa3 bg-white',
		},
		{
			header: 'Age',
			styles: 'fw6 pa3 bg-white',
		},
		{
			header: 'Weight',
			styles: 'fw6 pa3 bg-white',
		},
		{
			header: 'Snatch',
			styles: 'fw6 pa3 bg-white',
		},
		{
			header: 'CNJ',
			styles: 'fw6 pa3 bg-white',
		},
		{
			header: 'Coachname',
			styles: 'fw6 pa3 bg-white',
		},
	]

	// const props = {name, age, weight, snatch, cnj, coachName};
	return (
			// <AthleteList editAthleteWeight={editAthleteWeight} registeredAthletes={coachAthletes} />
			<Table headers={headers} tableContent={coachAthletes} />

	)
}

export default MyAthletes;