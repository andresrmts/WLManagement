import React, { useState, useEffect } from 'react';
import CompetitionList from '../../../../components/CompetitionList';
import NextAttempt from '../NextAttempt';
import Table from '../../../../components/Table';

const CoachInCompetition = ({ changeTime, athletes, lift, name, changeWeight, time, timer, toggleTimer }) => {
	const [myAthletes] = useState(athletes.filter(athlete => athlete.coachname === name));
	const [onTheClock, setOnTheClock] = useState(athletes.filter(athlete => athlete.attempt < 3).sort((a,b) => {if (a[lift] === b[lift]) {return a.attempt - b.attempt} else {return a[lift] - b[lift]}}));
	const [coachTimer, setCoachTimer] = useState({minutes: time.minutes, seconds: time.seconds});
	const [currentChangeCounter, setCurrentChangeCounter] = useState(0);

	useEffect(() => {
		setOnTheClock(athletes.filter(athlete => athlete.attempt < 3).sort((a,b) => {if (a[lift] === b[lift]) {return a.attempt - b.attempt} else {return a[lift] - b[lift]}}))
	}, [athletes, lift])

	useEffect(() => {
		setCurrentChangeCounter(0);
	}, [])

	const headers = [
		{
			header: 'Name',
			styles: "fw6 pa3 bg-white"
		},
		{
			header: 'Attempt',
			styles: "fw6 pa3 bg-white"
		},
		{
			header: lift,
			styles: "fw6 pa3 bg-white"
		}
	]

	const props = {name: '', attempt: '', [lift]: '', coachname: ''}

	return (
		<div className="cf ph2-ns">
			<div className="fl w-100 w-60-ns pa2">
				<NextAttempt changeTime={changeTime} timer={timer} athletes={athletes} lift={lift} time={time} setCoachTimer={setCoachTimer} />
			</div>
			<div className="fl w-100 w-40-ns pa2 mv4">
			   <div className="tc outline bg-white pv4">
			      Your Competitors
			      <CompetitionList toggleTimer={toggleTimer} onTheClock={onTheClock[0]} coachTimer={coachTimer} lift={lift} changeWeight={changeWeight} myAthletes={myAthletes} setCurrentChangeCounter={setCurrentChangeCounter} currentChangeCounter={currentChangeCounter} />
				</div>
			</div>
			<div className="fl w-100 w-100-ns pa2">
			   <div className="tc outline bg-white pv4">
			     	Next Up
			   <Table props={props} headers={headers} tableContent={onTheClock} />
			   </div>
			</div>

		</div>
	)
}

export default CoachInCompetition;