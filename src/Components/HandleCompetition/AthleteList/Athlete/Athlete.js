import React from 'react';

const Athlete = ({name, snatch, cnj, age, coachName, weight, attempt, lift, registeredName, editAthleteWeight}) => {

	if (lift) {
		return (
			<div className={`pa1 tc flex ${registeredName === coachName ? "red" : ""}`}>
				<div className="fl w-80 w-third-ns pa2">
					<h4>{name}</h4>
				</div>
				<div className="fl w-80 w-third-ns pa2">
					<h4>{attempt + 1}</h4>
				</div>
				<div className="fl w-80 w-third-ns pa2">
					<h4>{lift === 'snatch' ? snatch : cnj}</h4>
				</div>
			</div>
		)
	} else {
		return (
			<tr className="stripe-dark">
		      <td headers="name" className="tc pa3">{name}</td>
		      <td headers="age" className="tc pa3">{age}</td>
		      <td headers="weight" onClick={() => editAthleteWeight(name)} className="tc pa3">{weight}</td>
		      <td headers="snatch" className="tc pa3">{snatch}</td>
		      <td headers="cnj" className="tc pa3">{cnj}</td>
		      <td headers="coachname" className="tc pa3">{coachName}</td>
		   </tr>
		)
	}
}

export default Athlete;