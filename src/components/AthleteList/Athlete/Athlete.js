import React from 'react';

const Athlete = ({name, snatch, cnj, age, coachName, weight, attempt, lift, registeredName, editAthleteWeight}) => {

	if (lift) {
		return (
			<tr className="stripe-dark">
		      <td headers="name" className={`pa3 tc flex ${registeredName === coachName ? "red" : ""}`}>{name}</td>
		      <td headers="attempt" className="tc pa3">{attempt + 1}</td>
		      <td headers="lift" className="tc pa3">{lift === 'snatch' ? snatch : cnj}</td>
		   </tr>
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