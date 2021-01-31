import React, { useState, useEffect } from 'react';
import NextAttempt from '../NextAttempt';
import Table from '../../../../components/Table';

const CompetitionAdmin = ({ athletes, lift, timer, toggleTimer, time, nextLift, setTime }) => {
	const [onTheClock, setOnTheClock] = useState(athletes.filter(athlete => athlete.attempt < 3).sort((a,b) => {if (a[lift] === b[lift]) {return a.attempt - b.attempt} else {return a[lift] - b[lift]}}));

	useEffect(() => {
		setOnTheClock(athletes.filter(athlete => athlete.attempt < 3).sort((a,b) => {if (a[lift] === b[lift]) {return a.attempt - b.attempt} else {return a[lift] - b[lift]}}))
	}, [athletes, lift])

	const headers = [
		{
			header: 'Name',
			styles: "fw6 pa3 bg-white"
		},
		{
			header: 'Attempt',
			styles: "fw6 pa3 bg-white"
		},
		{
			header: lift,
			styles: "fw6 pa3 bg-white"
		}
	];

	const props = {name: '', attempt: '', [lift]: ''};

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
			      <Table props={props} headers={headers} tableContent={onTheClock} />
			   </div>
			</div>
		</div>
	)
}

export default CompetitionAdmin;