import React, { useEffect, useState } from 'react';
import Timer from '../Timer';
import { useCompetitionContext } from '../../CompetitionContext';;

const NextAttempt = ({ setAthlete, setWeight, setAttempt, setTimedOut, prevAthlete, setCoachTimer }) => {
	const { registeredAthletes, lift, timer, time, changeTime } = useCompetitionContext();
	const [next, setNext] = useState(registeredAthletes.filter(athlete => athlete.attempt < 3).sort((a,b) => {if (a[lift] === b[lift]) {return a.attempt - b.attempt} else {return a[lift] - b[lift]}}));
	const [seconds, setSeconds] = useState(time.seconds);
	const [minutes, setMinutes] = useState(time.minutes);
	const [timerStart, setTimerStart] = useState(true);

	const updateTime = () => {
		if (minutes === 0 && seconds === 0) {
			if (setTimedOut) {
				changeTime(1, 0 + '0')
				setTimedOut(true);
			} else {
				changeTime(1, 0 + '0')
			}
		} else {
			if (seconds === 0 + '0' || seconds === 0) {
				changeTime(minutes - 1, 59)
			} else if (timerStart === false) {
				changeTime(minutes, seconds)
			} else if (timerStart === true) {
				changeTime(minutes, seconds - 1)
			}
		}
	}

	useEffect(() => {
		if (setAthlete) {
			setAthlete(next.length > 0 ? next[0].name : '');
			setWeight(next.length > 0 ? next[0][lift] : '');
			setAttempt(next.length > 0 ? next[0].attempt : '');
		}
	});

	useEffect(() => {
		const token = setTimeout(updateTime, 1000)
		const cleanUp = () => clearTimeout(token);

		return cleanUp;
	}, [seconds, timerStart])

	useEffect(() => {
		if (changeTime && next.length > 0) {
			if (prevAthlete === next[0].name) {
				changeTime(2, 0 + '0');
			} else {
				changeTime(1, 0 + '0');
			}
		}
	}, [registeredAthletes])

	useEffect(() => {
		setMinutes(time.minutes);
		setSeconds(time.seconds)
	}, [time])

	useEffect(() => {
		timer === true
		?
		setTimerStart(true)
		:
		setTimerStart(false)
	}, [timer])

	useEffect(() => {
		if (setCoachTimer) {
			setCoachTimer({minutes, seconds})
		}
	}, [seconds])

	useEffect(() => {
		setNext(registeredAthletes.filter(athlete => athlete.attempt < 3).sort((a,b) => {if (a[lift] === b[lift]) {return a.attempt - b.attempt} else {return a[lift] - b[lift]}}))
	}, [registeredAthletes])

	if (next.length > 0) {
		return (
			<article className="br2 ba dark-gray b--black-10 mv4 w-80 center">
			  <div className="pa2 ph3-ns pb3-ns">
			    <div className="mt1">
			      <div className="flex flex-column justify-around">
			      <Timer seconds={seconds} minutes={minutes} />
			        <h1 className="f2 pa2">{next[0].name}</h1>
			        <h1 className="f2 pa2">Attempt: {next[0].attempt + 1}</h1>
			      </div>
			      <div className="flex justify-around">
			      	<h1 className="f2-m pa3">{lift === 'snatch' ? 'Snatch' : 'Clean and Jerk'}</h1>
			        	<h1 className="f2-m pa3">Weight: {next[0][lift]}</h1>
			      </div>
			    </div>
			  </div>
			</article>
		)
	} else {
		return (
			<h1>No more attempts left</h1>
		)
	}
}

export default NextAttempt;