import React from 'react';
import Athlete from './Athlete/Athlete';

class AthleteList extends React.Component {
	constructor() {
		super();
		this.state = {
			athletes: []
		}
	}

	componentDidMount() {
	 fetch('https://jsonplaceholder.typicode.com/users')
	 	.then(response => response.json())
	   .then(athletes => {
	    	this.setState({ athletes: athletes })
	  });
	}

	render() {
		const { athletes } = this.state;
		return (
			<div>
				{
					athletes.map((athlete, i) => {
						return (
							<Athlete 
								key={i}
								name={athletes[i].name}
								snatch={athletes[i].address.geo.lat}
								cnj={athletes[i].address.geo.lng}
							/>
						)
					})
				}
			</div>
		)
	}
}

export default AthleteList;