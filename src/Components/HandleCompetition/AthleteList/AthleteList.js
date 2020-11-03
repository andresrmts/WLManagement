import React from 'react';
import Athlete from './Athlete/Athlete';

class AthleteList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	render() {
		const { registeredAthletes } = this.props;
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
							/>
						)
					})
				}
			</div>
		)
	}
}

export default AthleteList;