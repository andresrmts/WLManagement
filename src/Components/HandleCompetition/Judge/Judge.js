import React from 'react';

const Judge = ({ status, castVote }) => {
	if (status === 'notstarted') {
		return (
			<h1>The competition hasnt started yet. It will start in TIMER</h1>
		)
	} else if (status === 'started') {
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