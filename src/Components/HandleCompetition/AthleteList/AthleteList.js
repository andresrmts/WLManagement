import React from 'react';
import Athlete from './Athlete/Athlete';

const AthleteList = ({ registeredAthletes, inCompetitionAthletes, lift, name, editAthleteWeight }) => {
	if (registeredAthletes) {
		return (
			<div className="pa4">
				<div className="overflow-auto">
			    	<table className="f6 w-100 mw8 center" cellspacing="0">
				      <thead>
				        <tr className="stripe-dark">
				          <th id="name" className="fw6 tl pa3 bg-white">Name</th>
				          <th id="age" className="fw6 tl pa3 bg-white">Age</th>
				          <th id="weight" className="fw6 tl pa3 bg-white">Weight</th>
				          <th id="snatch" className="fw6 tl pa3 bg-white">Snatch</th>
				          <th id="cnj" className="fw6 tl pa3 bg-white">CNJ</th>
				          <th id="coachname" className="fw6 tl pa3 bg-white">Coach Name</th>
				        </tr>
				      </thead>
				      <tbody className="lh-copy">
					   {
							registeredAthletes.map((athlete, i) => {
								return (
									<Athlete 
										key={i}
										name={athlete.name}
										age={athlete.age}
										snatch={athlete.snatch}
										cnj={athlete.cnj}
										coachName={athlete.coachname}
										weight={athlete.weight}
										editAthleteWeight={editAthleteWeight}
									/>
								)
							})
						}
				      </tbody>
				   </table>
			   </div>
				{/*<div className="tc flex bb">
									<div className="fl w-80 w-third-ns pa2">
										<h4>Name</h4>
									</div>
									<div className="fl w-80 w-third-ns pa2">
										<h4>Age</h4>
									</div>
									<div className="fl w-80 w-third-ns pa2">
										<h4>Weight</h4>
									</div>
									<div className="fl w-80 w-third-ns pa2">
										<h4>Snatch</h4>
									</div>
									<div className="fl w-80 w-third-ns pa2">
										<h4>Clean And Jerk</h4>
									</div>
									<div className="fl w-80 w-third-ns pa2">
										<h4>Coach Name</h4>
									</div>
								</div>
								*/}
				{/*<div>
									{
										// registeredAthletes.map((athlete, i) => {
										// 	return (
										// 		<Athlete 
										// 			key={i}
										// 			name={athlete.name}
										// 			age={athlete.age}
										// 			snatch={athlete.snatch}
										// 			cnj={athlete.cnj}
										// 			coachName={athlete.coachname}
										// 			weight={athlete.weight}
										// 			editAthleteWeight={editAthleteWeight}
										// 		/>
										// 	)
										// })
									}
								</div>*/}
			</div>
		)
	} else {
		return (
			<div>
				{
					inCompetitionAthletes.sort((a, b) => {
						if (a[lift] === b[lift]) {
							return a.attempt - b.attempt
						} else {
							return a[lift] - b[lift]
						} 
					}).map((athlete, i) => {
						if (athlete.attempt < 3) {
								return (
									<Athlete 
										key={i}
										name={athlete.name}
										attempt={athlete.attempt}
										snatch={athlete.snatch}
										cnj={athlete.cnj}
										lift={lift}
										coachName={athlete.coachname}
										registeredName={name}
									/>
							)
						}
					})
				}
			</div>
		)
	}
}

export default AthleteList;