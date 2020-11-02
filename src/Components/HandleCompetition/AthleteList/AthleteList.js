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
								name={registeredAthletes[i].name}
								age={registeredAthletes[i].age}
								snatch={registeredAthletes[i].snatch}
								cnj={registeredAthletes[i].cnj}
								coachName={registeredAthletes[i].coachname}
							/>
						)
					})
				}
			</div>
		)
	}
}

export default AthleteList;