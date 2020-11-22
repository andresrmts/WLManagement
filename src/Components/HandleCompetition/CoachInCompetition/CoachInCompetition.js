import React, { Component } from 'react';
import CompetitionList from '../../CompetitionList/CompetitionList';
import AthleteList from '../AthleteList/AthleteList';

class CoachInCompetition extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	render() {
		const { athletes, lift, name, changeWeight } = this.props;
		const myAthletes = athletes.filter(athlete => athlete.coachname === name)
		return (
			  <div class="cf ph2-ns">
			    <div class="fl w-100 w-60-ns pa2">
			      <div class="tc outline bg-white pv4">
			      	Your boiiis
			      	<CompetitionList lift={lift} changeWeight={changeWeight} myAthletes={myAthletes} />
			      </div>
			    </div>
			    <div class="fl w-100 w-40-ns pa2">
			      <div class="tc outline bg-white pv4">
			      	Next Up
			      	<div className="pa1 tc" style={{display: 'flex'}}>
							<div className="fl w-80 w-third-ns pa2">
								<h4>Name</h4>
							</div>
							<div className="fl w-80 w-third-ns pa2">
								<h4>Attempt</h4>
							</div>
							<div className="fl w-80 w-third-ns pa2">
								<h4>{lift}</h4>
							</div>
						</div>
			      	<AthleteList name={name} lift={lift} inCompetitionAthletes={athletes} />
			      </div>
			    </div>
			  </div>
		)
	}
}

export default CoachInCompetition;