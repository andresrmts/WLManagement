import React, { useEffect } from 'react';

const NextAttempt = ({athletes, lift, setAthlete, setWeight, setAttempt}) => {
	const next = athletes.sort((a,b) => {
		if (a[lift] === b[lift]) {
			return a.attempt - b.attempt
		} else {
			return a[lift] - b[lift]
		}
	})

	useEffect(() => {
		setAthlete(next[0].name);
		setWeight(next[0][lift]);
		setAttempt(next[0].attempt)
	}, [])

	return (
		<article class="br2 ba dark-gray b--black-10 mv4 w-80 center">
		  <div class="pa2 ph3-ns pb3-ns">
		    <div class="mt1">
		      <div class="flex flex-column justify-around">
		        <h1 class="f2 pa2">{next[0].name}</h1>
		        <h1 class="f2 pa2">Attempt: {next[0].attempt + 1}</h1>
		      </div>
		      <div class="flex justify-around">
		      	<h1 class="f2-m pa3">{lift === 'snatch' ? 'Snatch' : 'Clean and Jerk'}</h1>
		        	<h1 class="f2-m pa3">Weight: {lift === 'snatch' ? next[0].snatch : next[0].cnj}</h1>
		      </div>
		    </div>
		  </div>
		</article>
	)
}

export default NextAttempt;