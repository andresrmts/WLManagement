import React from 'react';
import AthleteList from '../AthleteList/AthleteList';
import NextAttempt from '../NextAttempt/NextAttempt';

const CompetitionAdmin = ({ athletes, lift, timer, toggleTimer, time, nextLift, setTime }) => {

	return (
		<div className="cf ph2-ns">
			<div className="flex">
				<div className="pointer ba tc w-20 center" onClick={() => toggleTimer()}>
					{timer === true ? <p className="pointer">Stop</p> : <p className="pointer">Start</p>}
				</div>
				<div onClick={() => nextLift()} className="ba tc w-20 center">
					{lift === 'snatch' ? <p>Go to CNJ</p> : <p></p>}
				</div>			
			</div>
			<div className="fl w-100 w-60-ns pa2 tc">
				Next Attempt
				<NextAttempt setTime={setTime} time={time} timer={timer} lift={lift} athletes={athletes} />
			</div>
			<div className="fl w-100 w-40-ns pa2">
				<div className="tc outline bg-white pv4">
			   	Next Up
			      <AthleteList lift={lift} inCompetitionAthletes={athletes} />
			   </div>
			</div>
		</div>
	)
}

export default CompetitionAdmin;