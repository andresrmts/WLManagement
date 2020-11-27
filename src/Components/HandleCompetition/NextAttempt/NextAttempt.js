import React, { useEffect } from 'react';
import Timer from '../Timer/Timer';

const NextAttempt = ({athletes, lift, setAthlete, setWeight, setAttempt}) => {
	const next = athletes.filter(athlete => athlete.attempt < 3).sort((a,b) => {
		if (a[lift] === b[lift]) {
			return a.attempt - b.attempt
		} else {
			return a[lift] - b[lift]
		}
	})

	useEffect(() => {
		if (setAthlete) {
			setAthlete(next.length > 0 ? next[0].name : '');
			setWeight(next.length > 0 ? next[0][lift] : '');
			setAttempt(next.length > 0 ? next[0].attempt : '');
		}
	})

	if (next.length > 0) {
		return (
			<article className="br2 ba dark-gray b--black-10 mv4 w-80 center">
			  <div className="pa2 ph3-ns pb3-ns">
			    <div className="mt1">
			      <div className="flex flex-column justify-around">
			      <Timer />
			        <h1 className="f2 pa2">{next[0].name}</h1>
			        <h1 className="f2 pa2">Attempt: {next[0].attempt + 1}</h1>
			      </div>
			      <div className="flex justify-around">
			      	<h1 className="f2-m pa3">{lift === 'snatch' ? 'Snatch' : 'Clean and Jerk'}</h1>
			        	<h1 className="f2-m pa3">Weight: {lift === 'snatch' ? next[0].snatch : next[0].cnj}</h1>
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