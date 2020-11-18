import React from 'react';

// className={`pa1 tc ${registeredName === coachName ? "red" : ""} `}

const Athlete = ({name, snatch, cnj, age, coachName, weight, attempt, lift, registeredName}) => {
	if (lift === 'snatch') {
		return (
			<div className={`pa1 tc ${registeredName === coachName ? "red" : ""}`} style={{display: 'flex'}}>
				<div className="fl w-80 w-third-ns pa2">
					<h4>{name}</h4>
				</div>
				<div className="fl w-80 w-third-ns pa2">
					<h4>{attempt + 1}</h4>
				</div>
				<div className="fl w-80 w-third-ns pa2">
					<h4>{snatch}</h4>
				</div>
			</div>
		)
	} else if (lift === 'cnj') {
		return (
			<div className={`pa1 tc ${registeredName === coachName ? "red" : ""}`} style={{display: 'flex'}}>
				<div className="fl w-80 w-third-ns pa2">
					<h4>{name}</h4>
				</div>
				<div className="fl w-80 w-third-ns pa2">
					<h4>{attempt + 1}</h4>
				</div>
				<div className="fl w-80 w-third-ns pa2">
					<h4>{cnj}</h4>
				</div>
			</div>
		)
	} else {
		return (
			<div className="pa1 tc" style={{display: 'flex'}}>
				<div className="fl w-80 w-third-ns pa2">
					<h4>{name}</h4>
				</div>
				<div className="fl w-80 w-third-ns pa2">
					<h4>{age}</h4>
				</div>
				<div className="fl w-80 w-third-ns pa2">
					<h4>{weight}</h4>
				</div>
				<div className="fl w-80 w-third-ns pa2">
					<h4>{snatch}</h4>
				</div>
				<div className="fl w-80 w-third-ns pa2">
					<h4>{cnj}</h4>
				</div>
				<div className="fl w-80 w-third-ns pa2">
					<h4>{coachName}</h4>
				</div>
			</div>
		)
	}
}

export default Athlete;