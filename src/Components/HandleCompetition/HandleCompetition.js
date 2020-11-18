import React, { Component } from 'react';
import AdminNav from './AdminNav/AdminNav';
import Registrations from './Registrations/Registrations';
import AthleteList from './AthleteList/AthleteList';
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

class HandleCompetition extends Component {
	constructor(props) {
		super(props);
		this.state = {
			comproute: 'home',
			status: 'started',
			lift: 'cnj',
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
					name: 'Poobe Pullertis',
					attempt: 1,
					weight: 51,
					age: 27,
					snatch: 26,
					cnj: 23,
					coachname: 'Coach'
				},
				{
					name: 'Saskia Kissitamine',
					attempt: 0,
					weight: 50,
					age: 27,
					snatch: 27,
					cnj: 23,
					coachname: 'Andres Riimets'
				},
				{
					name: 'Kraadiklaasi Kadri',
					attempt: 0,
					weight: 53,
					age: 27,
					snatch: 25,
					cnj: 40,
					coachname: 'Andres Riimets'
				}
			],
			verdict: {
				result: 0,
				votes: 0
			}
		}
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
					attempt: 1,
					weight: '',
					age,
					snatch,
					cnj,
					coachname: this.props.name
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

	castVote = (decision) => {
		if (decision === 'yes') {
			this.setState(prevState => ({
				verdict: {
					result: prevState.verdict.result + 1,
					votes: prevState.verdict.votes + 3
				}
			}))
		} else {
			this.setState(prevState => ({
				verdict: {
					result: prevState.verdict.result - 1,
					votes: prevState.verdict.votes + 3
				}
			}))
		}
	}

	joinComp = (name, role) => {
		this.state.registrations.push({name: name, role: role});
		this.setState({role: role})
		console.log(this.state.registrations);
	}

	changeWeight = (athlete, weight) => {
		const { lift } = this.state;
		const index = this.state.registeredAthletes.findIndex(athletex => athletex.name === athlete.name);
		this.setState(prevState => ({
			registeredAthletes: prevState.registeredAthletes.map(el => el.name === athlete.name ? Object.assign(el, {[lift]: weight++}) : el)
		}))
		console.log(this.state.registeredAthletes[index][lift])
	}

	renderCompRoutes = (route) => {
		const { name, isAdmin } = this.props;
		const { lift, registrations, status, registeredAthletes, acceptedRegistrations } = this.state;
		const filteredName = acceptedRegistrations.filter(reg => reg.name === name);
		const onlyCoachAthletes = registeredAthletes.filter(athlete => athlete.coachname === name)
		switch(route) {
			case 'home':
				if (status === 'notstarted') {
					if (isAdmin) {
						return <Registrations registrations={registrations} acceptedRegistrations={acceptedRegistrations} />
					} else if (filteredName.length > 0 && filteredName[0].role === 'coach') {
						return <MyAthletes coachName={name} coachAthletes={onlyCoachAthletes} />
					} else if (filteredName.length > 0 && filteredName[0].role === 'judge') {
						return <Judge castVote={this.castVote} status={status} />
					} else if (filteredName.length > 0 && filteredName[0].role === 'changetable') {
						return <ChangeTable />
					} else if (registrations.find(reg => reg.name === name) !== undefined) {
						return <h1>Your registration hasn't been accepted yet by the admin!</h1>
					} else {
						return <RoleSelection changeCompRoute={this.changeCompRoute} joinComp={this.joinComp} name={name} />
					}
				} else {
					if (filteredName.length > 0 && filteredName[0].role === 'coach') {
						return <CoachInCompetition changeWeight={this.changeWeight} name={name} lift={lift} athletes={registeredAthletes} />
					} else if (isAdmin) {
						return <CompetitionAdmin />
					} else if (filteredName.length > 0 && filteredName[0].role === 'judge') {
						return <Judge castVote={this.castVote} status={status} />
					} else if (filteredName.length > 0 && filteredName[0].role === 'changetable') {
						return <ChangeTable />
					}
				}
				break;
			case 'registered':
				return <RegisteredOfficials acceptedRegistrations={acceptedRegistrations} />
			case 'athletelist':
				return <AthleteList registeredAthletes={registeredAthletes} />
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
								: 	<p onClick={() => onRouteChange('competitionselection')} className="f6 tc underline pointer">Exit</p>)
						)
				}
				{this.renderCompRoutes(comproute)}
			</div>
		)
	}
}

export default HandleCompetition;