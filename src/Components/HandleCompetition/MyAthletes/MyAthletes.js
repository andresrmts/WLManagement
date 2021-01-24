import React from 'react';
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

	const props = {name: '', age: '', weight: '', snatch: '', cnj: '', coachname:''};
	const outSideProps = {functions: {weight: editAthleteWeight}}
	return (
			<Table props={props} headers={headers} tableContent={coachAthletes} outSideProps={outSideProps} />

	)
}

export default MyAthletes;