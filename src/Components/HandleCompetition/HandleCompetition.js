import React, { Component } from 'react';
import AdminNav from './AdminNav/AdminNav';
import Registrations from './Registrations/Registrations';
import CoachNav from './CoachNav/CoachNav';
import MyAthletes from './MyAthletes/MyAthletes';
import RegisteredOfficials from './RegisteredOfficials/RegisteredOfficials';
import AthleteRegistration from './AthleteRegistration/AthleteRegistration';
import Judge from './Judge/Judge';
import Result from './Result/Result';
import ChangeTable from './ChangeTable/ChangeTable';
import RoleSelection from '../RoleSelection/RoleSelection';
import CoachInCompetition from './CoachInCompetition/CoachInCompetition';
import CompetitionAdmin from './CompetitionAdmin/CompetitionAdmin';
import Table from '../Table/Table';
import { Link } from '../router';
import { routes } from '../router/routes';

class HandleCompetition extends Component {
	constructor(props) {
		super(props);
		this.state = {
			comproute: 'home',
			status: 'notstarted',
			timer: true,
			time: {minutes: 1, seconds: 0 + '0'},
			lift: 'snatch',
			acceptedRegistrations: [
				{
					name: 'Külli',
					role: 'judge'
				},
				{
					name: 'Andres Riimets',
					role: 'coach'
				}

			],
			registrations: [
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
			],
			registeredAthletes: [
				{
					name: 'Athlete1',
					attempt: 0,
					weight: "-",
					age: 27,
					snatch: 30,
					cnj: 23,
					coachname: 'Coach',
					result: {
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
			],
			verdict: {
				result: 0,
				votes: 0
			}
		}
	}

	editAthleteWeight = (athleteName) => {
		const weight = prompt('Enter athlete weight:')
		this.setState({
			registeredAthletes: this.state.registeredAthletes.map(athlete => athleteName === athlete.name ? Object.assign(athlete, {weight: weight}) : athlete)
		})
	}

	nextLift = () => {
		this.setState({
			lift: 'cnj',
			registeredAthletes: this.state.registeredAthletes.map(athlete => Object.assign(athlete, {attempt: 0})),
			time: {minutes: 1, seconds: 0 + '0'},
			timer: false
		}, () => this.setTime(1, 0 + '0'))
	}

	setTime = (minutes, seconds) => {
		this.setState({time: {minutes, seconds}});
	}

	toggleStatus = (status) => {
		this.setState({status: status})
	}

	changeCompRoute = (route) => {
		this.setState({comproute: route})
	}

	addAthlete = (name, age, snatch, cnj) => {
		if (age < 1 || age > 99 || snatch < 10 || snatch > 230 || cnj < 10 || cnj > 300) {
			alert('Please enter valid info!')
		} else {
			this.state.registeredAthletes.push(
				{
					name,
					attempt: 0,
					weight: '',
					age,
					snatch,
					cnj,
					coachname: this.props.name,
					result: {
						snatch: [

						],
						cnj: [

						]
					}
				}
			)
			document.getElementById('name').value=''; 
         document.getElementById('age').value=''; 
         document.getElementById('snatch').value='';
         document.getElementById('cnj').value='';
		}
	}

	seeState = () => {
		console.log(this.state)
	}

	goToNextAttempt = (athlete, weight, attempt) => {
		const index = this.state.registeredAthletes.findIndex(registration => registration.name === athlete);
		const { lift } = this.state;
		if (this.state.verdict.result > 0 && this.state.verdict.votes === 3 && this.state.registeredAthletes[index].attempt < 3) {
			this.state.registeredAthletes[index].result[lift].push(weight);
			this.setState(prevState => ({
				registeredAthletes: prevState.registeredAthletes.map(el => el.name === athlete ? Object.assign(el, {[lift]: weight++, attempt: attempt++}) : el),
				verdict: {
					result: 0,
					votes: 0
				}
			}))
		} else if (this.state.verdict.result < 0 && this.state.verdict.votes === 3 && this.state.registeredAthletes[index].attempt < 3) {
			this.state.registeredAthletes[index].result[lift].push(weight + 'x');
			this.setState(prevState => ({
				registeredAthletes: prevState.registeredAthletes.map(el => el.name === athlete ? Object.assign(el, {attempt: attempt++}) : el),
				verdict: {
					result: 0,
					votes: 0
				}
			}))
		}
	}

	castVote = (decision, athlete, weight, attempt) => {
		if (decision === 'yes') {
			this.setState(prevState => ({
				verdict: {
					result: prevState.verdict.result + 1,
					votes: prevState.verdict.votes + 3
				}
			}
			), () => setTimeout(() => this.goToNextAttempt(athlete, weight, attempt), 3000))
		} else {
			this.setState(prevState => ({
				verdict: {
					result: prevState.verdict.result - 1,
					votes: prevState.verdict.votes + 3
				}
			}
			), () => setTimeout(() => this.goToNextAttempt(athlete, weight, attempt), 3000))
		}
	}

	joinComp = (name, role) => {
		this.state.registrations.push({name: name, role: role});
	}

	changeWeight = (athlete, weight) => {
		const { lift, registeredAthletes } = this.state;
		this.setState({registeredAthletes: registeredAthletes.map(el => el.name === athlete.name ? Object.assign(el, {[lift]: weight}) : el)})
	}

	changeAlert = () => {

	}

	toggleTimer = () => {
		this.setState(prevState => ({
			timer: !prevState.timer
		}))
	}

	approveRemove = (decision, name, role) => {
		let splicedArray;
		const {registrations, acceptedRegistrations} = this.state;
		if (decision === 'yes' && role === 'judge') {
			if (acceptedRegistrations.filter(judge => judge.role === 'judge').length < 3) {
				splicedArray = registrations.splice(registrations.findIndex(participant => participant.name === name), 1);
				acceptedRegistrations.push(splicedArray[0]);
				this.setState({registrations: registrations});
			} else {
				alert('There already are 3 judges in the competition')
			}
		} else if (decision === 'yes') {
			splicedArray = registrations.splice(registrations.findIndex(participant => participant.name === name), 1);
			acceptedRegistrations.push(splicedArray[0]);
			this.setState({registrations: registrations});
		} else {
			registrations.splice(registrations.findIndex(participant => participant.name === name), 1);
			this.setState({registrations: registrations});
		}
	}

	renderCompRoutes = (route) => {
		const { name, isAdmin } = this.props;
		const { lift, registrations, status, registeredAthletes, acceptedRegistrations, timer, time } = this.state;
		const filteredName = acceptedRegistrations.filter(reg => reg.name === name);
		const onlyCoachAthletes = registeredAthletes.filter(athlete => athlete.coachname === name);
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
		const outSideProps = {functions: {weight: this.editAthleteWeight}}
		switch(route) {
			case 'home':
				if (status === 'notstarted') {
					if (isAdmin) {
						return <Registrations approveRemove={this.approveRemove} registrations={registrations} acceptedRegistrations={acceptedRegistrations} />
					} else if (filteredName[0] && filteredName[0].role === 'coach') {
						return <MyAthletes editAthleteWeight={this.editAthleteWeight} coachName={name} coachAthletes={onlyCoachAthletes} />
					} else if (filteredName[0] && filteredName[0].role === 'judge') {
						return <Judge status={status} />
					} else if (filteredName[0] && filteredName[0].role === 'changetable') {
						return <ChangeTable />
					} else if (registrations.find(reg => reg.name === name) !== undefined) {
						return <h1>Your registration hasn't been accepted yet by the admin!</h1>
					} else {
						return <RoleSelection changeCompRoute={this.changeCompRoute} joinComp={this.joinComp} name={name} />
					}
				} else {
					if (isAdmin) {
						return <CompetitionAdmin setTime={this.setTime} nextLift={this.nextLift} time={time} toggleTimer={this.toggleTimer} timer={timer} lift={lift} athletes={registeredAthletes} />
					} else if (filteredName[0] && filteredName[0].role === 'coach') {
						return <CoachInCompetition setTime={this.setTime} toggleTimer={this.toggleTimer} timer={timer} time={time} changeWeight={this.changeWeight} name={name} lift={lift} athletes={registeredAthletes} />
					} else if (filteredName[0] && filteredName[0].role === 'judge') {
						return <Judge setTime={this.setTime} time={time} timer={timer} goToNextAttempt={this.goToNextAttempt} lift={lift} athletes={registeredAthletes} castVote={this.castVote} status={status} />
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
				return <AthleteRegistration addAthlete={this.addAthlete} />
			default:
				return <h1>Something went wrong...</h1>
		}
	}

	render() {
		const { onRouteChange, adminToggle, isAdmin, name } = this.props;
		const { comproute, status } = this.state;
		return (
			<div>
				{isAdmin
					? <AdminNav 
						status={status} 
						toggleStatus={this.toggleStatus} 
						compRoute={this.changeCompRoute} 
						adminToggle={adminToggle} 
						onRouteChange={onRouteChange} />
					: (status !== 'notstarted' 
						? <Result seeState={this.seeState} result={this.state.verdict.result} votes={this.state.verdict.votes} />
						: (this.state.acceptedRegistrations.find(reg => reg.name === name && reg.role === 'coach')
								? <CoachNav 
									name={name} 
									compRoute={this.changeCompRoute} 
									onRouteChange={onRouteChange} />
								: <Link to={routes.competitionselection.path} className="f6 tc underline pointer center">Exit</Link>)
						)
				}
				{this.renderCompRoutes(comproute)}
			</div>
		)
	}
}

export default HandleCompetition;