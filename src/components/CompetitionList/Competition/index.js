import React, { useState } from 'react';
import { Link, RouterContext } from '../../../Router';
import { routes } from '../../../Router/routes';

const Competition = ({ adminToggle, email, name, location, date, attempt, cnj, snatch, onTheClock, setCurrentChangeCounter, currentChangeCounter, changeWeight, lift, toggleTimer, time }) => {
	const [weight, setWeight] = useState(lift === 'snatch' ? snatch : cnj);
	const { user, changecompetition } = React.useContext(RouterContext);
	
	if (adminToggle) {
		return (
			<article className="mw5 tc dib bg-white br3 pa3 ma3 ba b--black-10">
			  <div className="tc">
			    <h1 className="tc f4">{name}</h1>
			    <h2 className="tc f5">{location}</h2>
			    <h3 className="tc f6">{date}</h3>
			    <hr className="mw3 bb bw1 b--black-10" />
			    <div style={{ display: 'flex', justifyContent: 'center'}}>
							<Link to={routes.competition.path} onClick={() => {
								adminToggle(user.email === email);
								changecompetition(name);
							}} className="f6 link dim br-pill ba ph3 pv2 mb2 dib mid-gray pointer">{user.email === email ? 'Admin' : 'Handle'}</Link>
				</div>
			  </div>
			</article>
		)
	} else if (lift) {
		return (
			<article className="mw5 tc dib bg-white br3 pa3 ma3 mh4 ba b--black-10">
			  <div className="tc">
			    <h1 className={`tc center f4 flex flex-wrap ${onTheClock.name === name ? "red" : ""}`}>{name}</h1>
			    <h2 className="tc f5">Attempt: {attempt + 1}</h2>
			    <h3 className="tc f6">Next weight: {weight}</h3>
			    	<p className="pointer ba w-25 flex center pa1" onClick={() => {
			    		if (onTheClock.name === name && time.seconds < 31) {
								alert('No changes allowed when 30sec remaining on clock');
								return;
			    		}
			    		setWeight(weight + 1)
			    	}}>+</p>
			    	<p className="pointer ba pa4 w-50 flex center" onClick={() => {
			    		if (onTheClock.name === name) {
			    			if (currentChangeCounter < 2 && time.seconds > 30) {
				    			changeWeight({name}, weight);
				    			toggleTimer();
									setCurrentChangeCounter(prev => prev + 1);
									return;
			    			} 
								alert('You are only allowed 2 changes when athlete is on the clock!');
								setWeight(lift === 'snatch' ? snatch : cnj);
								return;
			    		}
			    		changeWeight({name}, weight);
			    	}}>Approve</p>
			    <hr className="mw3 bb bw1 b--black-10" />
			  </div>
			</article>
		)
	}
	return (
		<article className="mw5 tc dib bg-white br3 pa3 ma3 ba b--black-10">
			<div className="tc">
			  <h1 className="tc f4 flex flex-wrap">{name}</h1>
			  <h2 className="tc f5">{location}</h2>
			  <h3 className="tc f6">{date}</h3>
			  <hr className="mw3 bb bw1 b--black-10" />
			  <div style={{ display: 'flex', justifyContent: 'center'}}>
					<Link to={routes.competition.path} className="f6 link dim br-pill ba ph3 pv2 mb2 dib mid-gray pointer">Select Role</Link>
				</div>
			</div>
		</article>
	)
}

export default Competition;