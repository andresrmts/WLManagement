import React from 'react';

const Athlete = ({name, snatch, cnj, age, coachName, weight, attempt, lift, registeredName}) => {
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
			<div className="pa1 tc flex">
				<div className="fl w-80 w-third-ns pa2">
					<h4>{name}</h4>
				</div>
				<div className="fl w-80 w-third-ns pa2 bl">
					<h4>{age}</h4>
				</div>
				<div className="fl w-80 w-third-ns pa2 bl">
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
			</div>
		)
	}
}

export default Athlete;