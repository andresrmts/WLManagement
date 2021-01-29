import React from 'react';
import { Link } from '../router/';
import { routes } from '../router/routes';

const CompetitionCreation = ({ adminToggle }) => {
	return (
		<article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
			<main className="pa4 black-80">
				<div className="measure center">
			    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
			      <legend className="f4 fw6 ph0 mh0">Enter competition info</legend>
			      <div className="mt3">
			        <label className="db fw6 lh-copy f6" htmlFor="Name">Competition Name</label>
			        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="name" name="name"  id="name" />
			      </div>
			      <div className="mt3">
			        <label 
			        	className="db fw6 lh-copy f6" 
			        	htmlFor="location">
			        		Location
			        	</label>
			        <input 
			        	className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
			        	type="text" 
			        	name="location" 
			        	id="location" />
			      </div>
			      <div className="mv3">
			        <label 
			        	className="db fw6 lh-copy f6">
			        		Date
			        	</label>
			        <input 
			        	className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
			        	type="date" 
			        	name="date" 
			        	id="date" />
			      </div>
			    </fieldset>
			   </div>
			    <div className="measure center">
						<Link to={routes.competition.path} onClick={() => adminToggle(true)} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 m14 dib">Create</Link>
						<Link to={routes.competitionselection.path} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 m14 dib">Back</Link>
			    </div>
			</main>
		</article>
	)
}

export default CompetitionCreation;