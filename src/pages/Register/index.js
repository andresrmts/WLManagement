import React, { useState } from 'react';
import { Link, history, RouterContext } from '../../Router';
import { routes } from '../../Router/routes';

const Register = ({setSignedIn}) => {
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	return (
		<article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
			<main className="pa4 black-80">
				<div className="measure center">
			    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
			      <legend className="f4 fw6 ph0 mh0">Register</legend>
			      <div className="mt3">
			        <label className="db fw6 lh-copy f6" htmlFor="Name">Name</label>
			        <input onChange={e => setUsername(e.target.value)} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="name" name="name"  id="name" />
			      </div>
			      <div className="mt3">
			        <label 
			        	className="db fw6 lh-copy f6" 
			        	htmlFor="email-address">
			        		Email
			        	</label>
			        <input 
			        	className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
			        	type="email" 
			        	name="email-address" 
								id="email-address"
								onChange={e => setEmail(e.target.value)} 
								/>
			      </div>
			      <div className="mv3">
			        <label 
			        	className="db fw6 lh-copy f6" 
			        	htmlFor="password">
			        		Password
			        	</label>
			        <input 
			        	className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
			        	type="password" 
			        	name="password" 
			        	id="password" />
			      </div>
			    </fieldset>
			   </div>
			    <div className="measure center">
					<RouterContext.Consumer>
						{context => (
							<Link to={routes.competitionselection.path} onClick={() => {
								setSignedIn(history.location);
								context.setuser(Math.floor(Math.random() * 10), username, email);
							}} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib">Register</Link>
						)}
					</RouterContext.Consumer>
			    </div>
			</main>
		</article>
	)
}

export default Register;