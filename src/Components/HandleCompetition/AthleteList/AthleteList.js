import React from 'react';
import Athlete from './Athlete/Athlete';

const AthleteList = ({ registeredAthletes, inCompetitionAthletes, lift, name }) => {
	if (registeredAthletes) {
		return (
			<div>
				<div className="tc flex bb">
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
				<div>
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
								/>
							)
						})
					}
				</div>
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