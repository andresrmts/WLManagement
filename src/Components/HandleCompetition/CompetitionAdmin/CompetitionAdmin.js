import React, {useState } from 'react';
import AthleteList from '../AthleteList/AthleteList';
import NextAttempt from '../NextAttempt/NextAttempt';

const CompetitionAdmin = ({ athletes, lift, timer, toggleTimer, time, nextLift }) => {

	return (
		<div className="cf ph2-ns">
			<div className="flex">
				<div className="pointer" onClick={() => toggleTimer()} className="ba tc w-20 center">
					{timer === true ? <p className="pointer">Stop</p> : <p className="pointer">Start</p>}
				</div>
				<div onClick={() => nextLift()} className="ba tc w-20 center">
					{lift === 'snatch' ? <p>Go to CNJ</p> : <p></p>}
				</div>			
			</div>
			<div className="fl w-100 w-60-ns pa2 tc">
				Next Attempt
				<NextAttempt time={time} timer={timer} lift={lift} athletes={athletes} />
			</div>
			<div className="fl w-100 w-40-ns pa2">
				<div className="tc outline bg-white pv4">
			   	Next Up
			      <div className="pa1 tc" style={{display: 'flex'}}>
						<div className="fl w-80 w-third-ns pa2">
							<h4>Name</h4>
						</div>
						<div className="fl w-80 w-third-ns pa2">
							<h4>Attempt</h4>
						</div>
						<div className="fl w-80 w-third-ns pa2">
							<h4>{lift}</h4>
						</div>
					</div>
			      <AthleteList lift={lift} inCompetitionAthletes={athletes} />
			   </div>
			</div>
		</div>
	)
}

export default CompetitionAdmin;