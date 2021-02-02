import React from 'react';
import Table from '../../../../components/Table';
import { useCompetitionContext } from '../../CompetitionContext';

const MyAthletes = () => {
	const { registeredAthletes, officialName, editAthleteWeight } = useCompetitionContext();
	const onlyCoachAthletes = registeredAthletes.filter(athlete => athlete.coachname === officialName);
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
	return <Table props={props} headers={headers} tableContent={onlyCoachAthletes} outSideProps={outSideProps} />
}

export default MyAthletes;