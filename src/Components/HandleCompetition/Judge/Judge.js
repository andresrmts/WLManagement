import React from 'react';

const Judge = ({ started, castVote }) => {
	if (started === false) {
		return (
			<h1>The competition hasnt started yet. It will start in TIMER</h1>
		)
	} else {
		return (
			<div className="flex center pa2">
				<p
					onClick={() => castVote('yes')} 
					className="pointer flex flex-column center pa2 ma2 vh-50 w-40 ba b--black tc">YES</p>
				<p 
					onClick={() => castVote('no')}
					className="pointer flex flex-column center pa2 ma2 vh-50 w-40 outline-m tc bg-red ba b--red">NO</p>
			</div>
		)
	}
}

export default Judge;