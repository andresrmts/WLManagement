import React from 'react';
import Athlete from './Athlete/Athlete';

class AthleteList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	render() {
		const { registeredAthletes, inCompetitionAthletes, lift, name } = this.props;
		if (registeredAthletes) {
			return (
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
}

export default AthleteList;