import React, { useEffect, useState } from 'react';
import Timer from '../Timer/Timer';

const NextAttempt = ({athletes, lift, setAthlete, setWeight, setAttempt, setTimedOut, prevAthlete, timer, time, setTime, setCoachTimer }) => {
	const [next, setNext] = useState(athletes.filter(athlete => athlete.attempt < 3).sort((a,b) => {if (a[lift] === b[lift]) {return a.attempt - b.attempt} else {return a[lift] - b[lift]}}));
	const [seconds, setSeconds] = useState(time.seconds);
	const [minutes, setMinutes] = useState(time.minutes);
	const [timerStart, setTimerStart] = useState(true);

	const updateTime = () => {
		if (minutes === 0 && seconds === 0) {
			if (setTimedOut) {
				setSeconds(0 + '0');
				setMinutes(1);
				setTimedOut(true);
			} else {
				setSeconds(0 + '0');
				setMinutes(1);
			}
		} else {
			if (seconds === 0 + '0' || seconds === 0) {
				setMinutes(minutes => minutes - 1);
				setSeconds(59);
			} else if (timerStart === false) {
				setSeconds(seconds);
			} else if (timerStart === true) {
				setSeconds(seconds => seconds - 1);
			}
		}
	}

	// const next = athletes.filter(athlete => athlete.attempt < 3).sort((a,b) => {
	// 	if (a[lift] === b[lift]) {
	// 		return a.attempt - b.attempt
	// 	} else {
	// 		return a[lift] - b[lift]
	// 	}
	// })

	useEffect(() => {
		if (setAthlete) {
			setAthlete(next.length > 0 ? next[0].name : '');
			setWeight(next.length > 0 ? next[0][lift] : '');
			setAttempt(next.length > 0 ? next[0].attempt : '');
		}
	})

	useEffect(() => {
		const token = setTimeout(updateTime, 1000)
		const cleanUp = () => clearTimeout(token);

		return cleanUp;
	}, [seconds, timerStart])

	useEffect(() => {
		if (setTime && next.length > 0) {
			if (prevAthlete === next[0].name) {
				setTime(2)
			} else {
				setTime(1)
			}
		}
	}, [])

	useEffect(() => {
		setMinutes(time.minutes);
		setSeconds(time.seconds)
	}, [time, athletes])

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
		setNext(athletes.filter(athlete => athlete.attempt < 3).sort((a,b) => {if (a[lift] === b[lift]) {return a.attempt - b.attempt} else {return a[lift] - b[lift]}}))
	}, [athletes])

	if (next.length > 0) {
		return (
			<article className="br2 ba dark-gray b--black-10 mv4 w-80 center">
			  <div className="pa2 ph3-ns pb3-ns">
			    <div className="mt1">
			      <div className="flex flex-column justify-around">
			      <Timer seconds={seconds} minutes={minutes} />
			        <h1 onClick={() => console.log(timer)} className="f2 pa2">{next[0].name}</h1>
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