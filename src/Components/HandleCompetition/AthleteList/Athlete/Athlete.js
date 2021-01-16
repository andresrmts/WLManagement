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
		          <td headers="name" className="pa3">{name}</td>
		          <td headers="age" className="pa3">{age}</td>
		          <td headers="weight" onClick={() => editAthleteWeight(name)} className="pa3">{weight}</td>
		          <td headers="snatch" className="pa3">{snatch}</td>
		          <td headers="cnj" className="pa3">{cnj}</td>
		          <td headers="coachname" className="pa3">{coachName}</td>
		         </tr>
			/*<div className="pa1 tc flex">
				<div className="fl w-80 w-third-ns pa2">
					<h4>{name}</h4>
				</div>
				<div className="fl w-80 w-third-ns pa2 bl">
					<h4>{age}</h4>
				</div>
				<div onClick={() => editAthleteWeight(name)} className="fl w-80 w-third-ns pa2 bl">
					<h4>{weight}</h4>
				</div>
				<div className="fl w-80 w-third-ns pa2 bl">
					<h4>{snatch}</h4>
				</div>
				<div className="fl w-80 w-third-ns pa2 bl">
					<h4>{cnj}</h4>
				</div>
				<div className="fl w-80 w-third-ns pa2 bl">
					<h4>{coachName}</h4>
				</div>
			</div>*/
		)
	}
}

export default Athlete;