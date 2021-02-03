import React from 'react';
import Competition from './Competition';

const CompetitionList = ({ adminToggle, useremail, onRouteChange, competitions, myAthletes, changeWeight, lift, onTheClock, toggleTimer, setCurrentChangeCounter, currentChangeCounter, time }) => {
	if (competitions) {
		return (
			<div>
				{
					competitions.map((comp, i) => {
						return (
							<Competition 
								key={i}
								name={comp.name}
								email={comp.email}
								location={comp.address.city}
								date={comp.id}
								onRouteChange={onRouteChange}
								useremail={useremail}
								adminToggle={adminToggle}
							/>
						)
					})
				}
			</div>
		)
	} else {
		return (
			<div>
				{
					myAthletes.map((athlete, i) => {
						return (
							<Competition 
								key={i}
								name={athlete.name}
								attempt={athlete.attempt}
								snatch={athlete.snatch}
								cnj={athlete.cnj}
								changeWeight={changeWeight}
								lift={lift}
								onTheClock={onTheClock}
								time={time}
								toggleTimer={toggleTimer}
								setCurrentChangeCounter={setCurrentChangeCounter}
								currentChangeCounter={currentChangeCounter}
							/>
						)
					})
				}
			</div>
		)
	}
}

export default CompetitionList;