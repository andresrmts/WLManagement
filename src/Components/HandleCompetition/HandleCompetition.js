import React from 'react';
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

class HandleCompetition extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			comproute: 'home',
			status: 'notstarted',
			acceptedRegistrations: [],
			registrations: [
				{
					name: 'Andres Riimets',
					role: 'coach'
				},
				{
					name: 'Piibe Pullerits',
					role: 'changetable'
				}
			],
			registeredAthletes: [
				{
					name: 'Loll',
					age: 27,
					snatch: 22,
					cnj: 23,
					coachname: 'Coach'
				},
				{
					name: 'Lollim',
					age: 27,
					snatch: 22,
					cnj: 23,
					coachname: 'Andres Riimets'
				}
			],
			result: 0
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

	castVote = (decision) => {
		if (decision === 'yes') {
			let voteCount = this.state.result;
			voteCount++;
			this.setState({result: voteCount})
		} else {
			let voteCount = this.state.result;
			voteCount--;
			this.setState({result: voteCount})
		}
	}

	joinComp = (name, role) => {
		this.state.registrations.push({name: name, role: role});
		console.log(this.state.registrations);
	}

	renderAdminRoutes = (route) => {
		const { name } = this.props;
		const { registrations, status, registeredAthletes, acceptedRegistrations } = this.state;
		const filteredName = registrations.filter(reg => reg.name === name);
		switch(route) {
			case 'home':
				if (this.props.isAdmin) {
					return <Registrations registrations={registrations} acceptedRegistrations={acceptedRegistrations} />
				} else if (filteredName.length > 0 && filteredName[0].role === 'coach') {
					return <MyAthletes coachName={this.props.name} registeredAthletes={registeredAthletes} />
				} else if (filteredName.length > 0 && filteredName[0].role === 'judge') {
					return <Judge castVote={this.castVote} status={status} />
				} else if (filteredName.length > 0 && filteredName[0].role === 'changetable') {
					return <ChangeTable />
				} else {
					return <RoleSelection changeCompRoute={this.changeCompRoute} joinComp={this.joinComp} name={name} />
				}
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
		const { comproute, status, result } = this.state;
		return (
			<div>
				{isAdmin
					? <AdminNav status={status} toggleStatus={this.toggleStatus} compRoute={this.changeCompRoute} adminToggle={adminToggle} onRouteChange={onRouteChange} />
					: (status !== 'notstarted' 
						? <Result result={result} />
						: <CoachNav name={name} compRoute={this.changeCompRoute} onRouteChange={onRouteChange}/>)
				}
				{this.renderAdminRoutes(comproute)}
			</div>
		)
	}
}

export default HandleCompetition;