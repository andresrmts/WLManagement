import React, { useState } from 'react';
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

const HandleCompetition = ({ adminToggle, isAdmin, officialName }) => {
	const [comproute, setCompRoute] = useState('home');
	const { status } = useCompetitionContext();
	const [timer, setTimer] = useState(true);
	const [time, setTime] = useState({minutes: 1, seconds: 0 + '0'});
	const [lift, setLift] = useState('snatch');
	const [acceptedRegistrations, setAcceptedRegistrations] = useState([
		{
			name: 'Külli', 
			role: 'judge'
		}, 
		{
			name: 'Andres Riimets', 
			role: 'coach'
		}
	]);
	const [registrations, setRegistrations] = useState([
		{
			name: 'Andres Riimets', 
			role: 'coach'
		}, 
		{
			name: 'Piibe Pullerits', 
			role: 'changetable'
		}, 
		{
			name: 'Priit', 
			role: 'judge'
		}
	]);
	const [registeredAthletes, setRegisteredAthletes] = useState([
		{
			name: 'Athlete1', 
			attempt: 0, 
			weight: "-", 
			age: 27, 
			snatch: 30, 
			cnj: 23, 
			coachname: 'Coach', 
			result: 
				{
					snatch: [], 
					cnj: []
				}
		}, 
		{
			name: 'Athlete2', 
			attempt: 0, 
			weight: "-",
			age: 27, 
			snatch: 26, 
			cnj: 23, 
			coachname: 'Andres Riimets', 
			result: {
				snatch: [], 
				cnj: []
			}
		}, 
		{
			name: 'Athlete3', 
			attempt: 0, 
			weight: "-", 
			age: 27, 
			snatch: 30, 
			cnj: 40, 
			coachname: 'Andres Riimets', 
			result: {
				snatch: [], 
				cnj: []
			}
		}
	]);
	const [verdict, setVerdict] = useState({
		result: 0,
		votes: 0
	})

	const editAthleteWeight = (athleteName) => {
		const weight = prompt('Enter athlete weight:')
		setRegisteredAthletes(pS => pS.map(ath => athleteName === ath.name ? Object.assign(ath, {weight: weight}) : ath));
	}

	const nextLift = () => {
		setLift('cnj');
		setRegisteredAthletes(pS => pS.map(ath => Object.assign(ath, {attempt: 0})));
		setTime({minutes: 1, seconds: 0 + '0'});
		setTimer(false);
	}

	const changeTime = (minutes, seconds) => {
		setTime({minutes: minutes, seconds: seconds});
	}

	const changeCompRoute = (route) => {
		setCompRoute(route);
	}

	const addAthlete = (name, age, snatch, cnj) => {
		if (age < 1 || age > 99 || snatch < 10 || snatch > 230 || cnj < 10 || cnj > 300) {
			alert('Please enter valid info!')
		} else {
			registeredAthletes.push({
				name, 
				attempt: 0, 
				weight: '', 
				age, 
				snatch, 
				cnj, 
				coachname: officialName, 
				result: {snatch: [], cnj: []}
			})
			document.getElementById('name').value=''; 
			document.getElementById('age').value=''; 
			document.getElementById('snatch').value='';
			document.getElementById('cnj').value='';
		}
	}

	const goToNextAttempt = (athlete, weight, attempt) => {
		const index = registeredAthletes.findIndex(reg => reg.name === athlete);
		if (verdict.result > 0 && verdict.votes === 3 && registeredAthletes[index].attempt < 3) {
			registeredAthletes[index].result[lift].push(weight);
			setRegisteredAthletes(pS => pS.map(ath => ath.name === athlete ? Object.assign(ath, {[lift]: weight++, attempt: attempt++}) : ath));
			setVerdict({result: 0, votes: 0});
		} else if (verdict.result < 0 && verdict.votes === 3 && registeredAthletes[index].attempt < 3) {
			registeredAthletes[index].result[lift].push(weight + 'x');
			setRegisteredAthletes(pS => pS.map(ath => ath.name === athlete ? Object.assign(ath, {attempt: attempt++}) : ath));
			setVerdict({result: 0, votes: 0});
		}
	}

	const castVote = (decision, athlete, weight, attempt) => {
		if (decision === 'yes') {
			setVerdict({result: 1, votes: 3});
		} else {
			setVerdict({result: -1, votes: 3});
		}
	}

	const joinComp = (name, role) => {
		registrations.push({name: name, role: role});
	}

	const changeWeight = (athlete, weight) => {
		setRegisteredAthletes(pS => pS.map(ath => ath.name === athlete.name ? Object.assign(ath, {[lift]: weight}) : ath));
	}

	const toggleTimer = () => {
		setTimer(pS => !pS);
	}

	const approveRemove = (decision, name, role) => {
		let splicedArray;
		if (decision === 'yes' && role === 'judge') {
			if (acceptedRegistrations.filter(judge => judge.role === 'judge').length < 3) {
				splicedArray = registrations.splice(registrations.findIndex(participant => participant.name === name), 1);
				acceptedRegistrations.push(splicedArray[0]);
				this.setState({registrations: registrations});
				setRegistrations(registrations);
			} else {
				alert('There already are 3 judges in the competition')
			}
		} else if (decision === 'yes') {
			splicedArray = registrations.splice(registrations.findIndex(participant => participant.name === name), 1);
			acceptedRegistrations.push(splicedArray[0]);
			setRegistrations(registrations);
		} else {
			registrations.splice(registrations.findIndex(participant => participant.name === name), 1);
			setRegistrations(registrations);
		}
	}

	const renderCompRoutes = (route) => {
		const filteredName = acceptedRegistrations.filter(reg => reg.name === officialName);
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
		];
		const props = {name: '', age: '', weight: '', snatch: '', cnj: '', coachname:''};
		const outSideProps = {functions: {weight: editAthleteWeight}}
		switch(route) {
			case 'home':
				if (status === 'notstarted') {
					if (isAdmin) {
						return <Registrations approveRemove={approveRemove} registrations={registrations} acceptedRegistrations={acceptedRegistrations} />
					} else if (filteredName[0] && filteredName[0].role === 'coach') {
						return <MyAthletes editAthleteWeight={editAthleteWeight} coachName={officialName} coachAthletes={onlyCoachAthletes} />
					} else if (filteredName[0] && filteredName[0].role === 'judge') {
						return <Judge />
					} else if (filteredName[0] && filteredName[0].role === 'changetable') {
						return <ChangeTable />
					} else if (registrations.find(reg => reg.name === officialName) !== undefined) {
						return <h1>Your registration hasn't been accepted yet by the admin!</h1>
					} else {
						return <RoleSelection changeCompRoute={changeCompRoute} joinComp={joinComp} name={officialName} />
					}
				} else {
					if (isAdmin) {
						return <CompetitionAdmin changeTime={changeTime} nextLift={nextLift} time={time} toggleTimer={toggleTimer} timer={timer} lift={lift} athletes={registeredAthletes} />
					} else if (filteredName[0] && filteredName[0].role === 'coach') {
						return <CoachInCompetition changeTime={changeTime} toggleTimer={toggleTimer} timer={timer} time={time} changeWeight={changeWeight} name={officialName} lift={lift} athletes={registeredAthletes} />
					} else if (filteredName[0] && filteredName[0].role === 'judge') {
						return <Judge changeTime={changeTime} time={time} timer={timer} goToNextAttempt={goToNextAttempt} lift={lift} athletes={registeredAthletes} castVote={castVote} />
					} else if (filteredName[0] && filteredName[0].role === 'changetable') {
						return <ChangeTable />
					}
				}
				break;
			case 'registered':
				return <RegisteredOfficials acceptedRegistrations={acceptedRegistrations} />
			case 'athletelist':
				return <Table props={props} headers={headers} tableContent={registeredAthletes} outSideProps={outSideProps} />
			case 'athleteregistration':
				return <AthleteRegistration addAthlete={addAthlete} />
			default:
				return <h1>Something went wrong...</h1>
		}
	}

	return (
			<div>
				{isAdmin
						? <AdminNav 
							compRoute={changeCompRoute} 
							adminToggle={adminToggle} />
						: (status !== 'notstarted' 
							? <Result result={verdict.result} votes={verdict.votes} />
							: (acceptedRegistrations.find(reg => reg.name === officialName && reg.role === 'coach')
									? <CoachNav 
										name={officialName} 
										compRoute={changeCompRoute}  />
									: <Link to={routes.competitionselection.path} className="f6 tc underline pointer center">Exit</Link>)
							)
					}
					{renderCompRoutes(comproute)}
				</div>
	)

}

export default HandleCompetition;