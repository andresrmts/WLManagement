import React, { useEffect } from 'react';
import AdminNav from './components/AdminNav';
import Registrations from './components/Registrations';
import CoachNav from './components/CoachNav';
import MyAthletes from './components/MyAthletes';
import RegisteredOfficials from './components/RegisteredOfficials';
import AthleteRegistration from './components/AthleteRegistration';
import Judge from './components/Judge';
import Result from './components/Result';
import ChangeTable from './components/ChangeTable';
import RoleSelection from './components/RoleSelection';
import CoachInCompetition from './components/CoachInCompetition';
import CompetitionAdmin from './components/CompetitionAdmin';
import Table from '../../components/Table';
import { useCompetitionContext } from './CompetitionContext';
import { Link } from '../../Router';
import { routes } from '../../Router/routes';
import { useAuthContext } from '../../AuthContext'; 

const HandleCompetition = () => {
	const { status, comproute, acceptedRegistrations, registeredAthletes, editAthleteWeight, registrations, verdict } = useCompetitionContext();
	const { userName, isAdmin, role, setRole } = useAuthContext();

	const filteredName = acceptedRegistrations.filter(reg => reg.name === userName);

	useEffect(() => {
		if (filteredName[0]) {
			setRole(filteredName[0].role);
			return;
		}
		if (isAdmin) {
			setRole('admin');
			return;
		}
	}, [role]);

	const renderCompRoutes = (route) => {
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
		];
		const props = {name: '', age: '', weight: '', snatch: '', cnj: '', coachname:''};
		const outSideProps = {functions: {weight: editAthleteWeight}}
		switch(route) {
			case 'home':
				if (status === 'notstarted') {
					if (isAdmin) {
						return <Registrations />
					} else if (filteredName[0] && filteredName[0].role === 'coach') {
						return <MyAthletes />
					} else if (filteredName[0] && filteredName[0].role === 'judge') {
						return <Judge />
					} else if (filteredName[0] && filteredName[0].role === 'changetable') {
						return <ChangeTable />
					} else if (registrations.find(reg => reg.name === userName) !== undefined) {
						return <h1>Your registration hasn't been accepted yet by the admin!</h1>
					} else {
						return <RoleSelection />
					}
				} else {
					if (isAdmin) {
						return <CompetitionAdmin />
					} else if (filteredName[0] && filteredName[0].role === 'coach') {
						return <CoachInCompetition />
					} else if (filteredName[0] && filteredName[0].role === 'judge') {
						return <Judge />
					} else if (filteredName[0] && filteredName[0].role === 'changetable') {
						return <ChangeTable />
					}
				}
				break;
			case 'registered':
				return <RegisteredOfficials />
			case 'athletelist':
				return <Table props={props} headers={headers} tableContent={registeredAthletes} outSideProps={outSideProps} />
			case 'athleteregistration':
				return <AthleteRegistration />
			default:
				return <h1>Something went wrong...</h1>
		}
	}

	return (
			<div>
				{isAdmin
						? <AdminNav />
						: (status !== 'notstarted' 
							? <Result />
							: (acceptedRegistrations.find(reg => reg.name === userName && reg.role === 'coach')
									? <CoachNav />
									: <Link to={routes.competitionselection.path} className="f6 tc underline pointer center">Exit</Link>)
							)
					}
					{renderCompRoutes(comproute)}
				</div>
	)

}

export default HandleCompetition;