import React, { useState } from 'react';

const Judge = ({ status, castVote }) => {
	const [voted, setVoted] = useState(false);
	

	if (status === 'notstarted') {
		return (
			<h1>The competition hasnt started yet. It will start in TIMER</h1>
		)
	} else if (status === 'started' && voted === false) {
		return (
			<div className="flex center pa2">
				<p
					id="yes"
					onClick={ () => {
						castVote('yes');
						setVoted(true)
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
		)
	} else if ({voted}) {
		return (
			<h1>You voted already</h1>
		)
	} else {
		return (
			<div className="flex center pa2">
				<p className="pointer flex flex-column center pa2 ma2 vh-50 w-40 ba b--black tc">PAUSE</p>
				<p className="pointer flex flex-column center pa2 ma2 vh-50 w-40 outline-m tc bg-red ba b--red">PAUSE</p>
			</div>
		)
	}
}

export default Judge;