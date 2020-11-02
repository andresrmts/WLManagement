import React from 'react';

const Athlete = ({name, snatch, cnj, age, coachName}) => {
	return (
		<div className="pa3 tc" style={{display: 'flex'}}>
			<div class="fl w-80 w-third-ns pa2">
				<h4>{name}</h4>
			</div>
			<div class="fl w-80 w-third-ns pa2">
				<h4>{age}</h4>
			</div>
			<div class="fl w-80 w-third-ns pa2">
				<h4>{snatch}</h4>
			</div>
			<div class="fl w-80 w-third-ns pa2">
				<h4>{cnj}</h4>
			</div>
			<div class="fl w-80 w-third-ns pa2">
				<h4>{coachName}</h4>
			</div>
		</div>
	)
}

export default Athlete;