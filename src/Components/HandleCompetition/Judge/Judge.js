import React, { useState } from 'react';
import NextAttempt from '../NextAttempt/NextAttempt';

const Judge = ({ status, castVote, athletes, lift, goToNextAttempt }) => {
	const [voted, setVoted] = useState(false);
	const [athlete, setAthlete] = useState('');
	const [weight, setWeight] = useState('');
	const [attempt, setAttempt] = useState('');

	if (status === 'notstarted') {
		return (
			<h1>The competition hasnt started yet. It will start in TIMER</h1>
		)
	} else if (status === 'started') {
		return (
			<div className="w-100">
				<div className="flex center pa2">
					<NextAttempt setAttempt={setAttempt} setWeight={setWeight} setAthlete={setAthlete} athletes={athletes} lift={lift} />
				</div>
				<div className="flex center pa2">
					<p
						id="yes"
						onClick={ () => {
							castVote('yes', athlete, weight, attempt);
							setVoted(true);
					}} 
						className="btn pointer flex flex-column center pa2 ma2 vh-50 w-40 ba b--black tc">YES</p>
					<p 
						id="no"
						onClick={ () => {
							castVote('no');
							setVoted(true);

					}}
						className="btn pointer flex flex-column center pa2 ma2 vh-50 w-40 outline-m tc bg-red ba b--red">NO</p>
				</div>
			</div>
		)
	} 
	// else if ({voted}) {
	// 	return (
	// 		<h1>You voted already</h1>
	// 	)
	// } else {
	// 	return (
	// 		<div className="flex center pa2">
	// 			<p className="pointer flex flex-column center pa2 ma2 vh-50 w-40 ba b--black tc">PAUSE</p>
	// 			<p className="pointer flex flex-column center pa2 ma2 vh-50 w-40 outline-m tc bg-red ba b--red">PAUSE</p>
	// 		</div>
	// 	)
	// }
}

export default Judge;