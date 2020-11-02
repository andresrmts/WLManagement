import React from 'react';

class AthleteRegistration extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			age: '',
			snatch: '',
			cnj: ''
		}
	}

	setAthleteName = (e) => {
		this.setState({name: e.target.value})
	}

	setAthleteAge = (e) => {
		this.setState({age: e.target.value})
	}

	setAthleteSnatch = (e) => {
		this.setState({snatch: e.target.value})
	}

	setAthleteCnj = (e) => {
		this.setState({cnj: e.target.value})
	}


	render() {
		const { addAthlete } = this.props;
		const { name, age, snatch, cnj} = this.state;
		return (
			<article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
				<main className="pa4 black-80">
					<div className="measure center">
				    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
				      <legend className="f4 fw6 ph0 mh0">Register</legend>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="Name">Name</label>
				        <input 
				        	onChange={this.setAthleteName}
				        	className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="name" name="name"  id="name" />
				      </div>
				      <div className="mv3">
				        <label 
				        	className="db fw6 lh-copy f6" 
				        	htmlFor="age">
				        		Age (number between 1 and 99)
				        	</label>
				        <input 
				        	onChange={this.setAthleteAge}
				        	className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				        	type="number"
				        	min="1"
				        	max="99" 
				        	name="age" 
				        	id="age" />
				      </div>
				      <div className="mv3">
				        <label 
				        	className="db fw6 lh-copy f6" 
				        	htmlFor="snatch">
				        		Snatch
				        	</label>
				        <input 
				        	onChange={this.setAthleteSnatch}
				        	className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				        	type="number"
				        	min="10"
				        	max="230" 
				        	name="snatch" 
				        	id="snatch" />
				      </div>
				      <div className="mv3">
				        <label 
				        	className="db fw6 lh-copy f6" 
				        	htmlFor="snatch">
				        		Clean and Jerk
				        	</label>
				        <input 
				        	onChange={this.setAthleteCnj}
				        	className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				        	type="number"
				        	min="10"
				        	max="300" 
				        	name="cnj" 
				        	id="cnj" />
				      </div>
				    </fieldset>
				   </div>
				    <div className="measure center">
				      <input
				      	onClick={() => addAthlete(name, age, snatch, cnj)} 
				      	className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
				      	type="submit" 
				      	value="Register" 
				      	/>
				    </div>
				</main>
			</article>
		)
	}
}

export default AthleteRegistration;