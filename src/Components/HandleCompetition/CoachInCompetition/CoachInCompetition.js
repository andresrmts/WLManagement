import React, { useState, useEffect } from 'react';
import CompetitionList from '../../CompetitionList/CompetitionList';
import AthleteList from '../AthleteList/AthleteList';
import NextAttempt from '../NextAttempt/NextAttempt';

const CoachInCompetition = ({ athletes, lift, name, changeWeight, time, timer, toggleTimer }) => {
	const [myAthletes] = useState(athletes.filter(athlete => athlete.coachname === name));
	const [onTheClock, setOnTheClock] = useState(athletes.filter(athlete => athlete.attempt < 3).sort((a,b) => {if (a[lift] === b[lift]) {return a.attempt - b.attempt} else {return a[lift] - b[lift]}}));
	const [coachTimer, setCoachTimer] = useState({minutes: time.minutes, seconds: time.seconds});
	const [currentChangeCounter, setCurrentChangeCounter] = useState(0);

	useEffect(() => {
		setOnTheClock(athletes.filter(athlete => athlete.attempt < 3).sort((a,b) => {if (a[lift] === b[lift]) {return a.attempt - b.attempt} else {return a[lift] - b[lift]}}))
	}, [athletes])

	useEffect(() => {
		setCurrentChangeCounter(0);
	}, [])

	return (
		<div className="cf ph2-ns">
			<div className="fl w-100 w-60-ns pa2">
				<NextAttempt timer={timer} athletes={athletes} lift={lift} time={time} setCoachTimer={setCoachTimer} />
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
			   <AthleteList onTheClock={onTheClock[0]} name={name} lift={lift} inCompetitionAthletes={athletes} />
			   </div>
			</div>

		</div>
	)
}

export default CoachInCompetition;