import React, { useState } from 'react';

const Competition = ({ adminToggle, email, useremail, name, location, date, onRouteChange, attempt, cnj, snatch, changeWeight, lift, onTheClock, coachTimer, toggleTimer, setCurrentChangeCounter, currentChangeCounter }) => {
	const [weight, setWeight] = useState(lift === 'snatch' ? snatch : cnj);
	if (adminToggle) {
		return (
			<article className="mw5 tc dib bg-white br3 pa3 ma3 ba b--black-10">
			  <div className="tc">
			    <h1 className="tc f4">{name}</h1>
			    <h2 className="tc f5">{location}</h2>
			    <h3 className="tc f6">{date}</h3>
			    <hr className="mw3 bb bw1 b--black-10" />
			    <div style={{ display: 'flex', justifyContent: 'center'}}>
					<button 
					className="f6 link dim br-pill ba ph3 pv2 mb2 dib mid-gray pointer"
					onClick={() => {
						onRouteChange('competition')
						useremail === email 
						? adminToggle(true)
						: adminToggle(false)
					}}
					>
					{useremail === email ? 'Admin' : 'Handle'}
					</button>
				</div>
			  </div>
			</article>
		)
	} else if (lift) {
		return (
			<article className="mw5 tc dib bg-white br3 pa3 ma3 ba b--black-10">
			  <div className="tc">
			    <h1 className={`tc f4 flex flex-wrap ${onTheClock.name === name ? "red" : ""}`}>{name}</h1>
			    <h2 className="tc f5">Attempt: {attempt + 1}</h2>
			    <h3 className="tc f6">Next weight: {weight} 
			    	<p className="pointer ba w-25 flex center pa1" onClick={() => {
			    		if (onTheClock.name === name && coachTimer.seconds < 31) {
			    			alert('No changes allowed when 30sec remaining on clock')
			    		} else {
			    			setWeight(weight + 1)
			    		}
			    	}}>+</p>
			    	<p className="pointer ba pa2 w-50 flex center" onClick={() => {
			    		if (onTheClock.name === name) {
			    			if (currentChangeCounter < 2) {
				    			changeWeight({name}, weight);
				    			toggleTimer();
				    			setCurrentChangeCounter(prev => prev + 1);
			    			} else {
			    				alert('You are only allowed 2 changes when athlete is on the clock!')
			    			}
			    		} else {
			    			changeWeight({name}, weight);
			    		}
			    		
			    	}}>Approve</p>
			    </h3>
			    <hr className="mw3 bb bw1 b--black-10" />
			  </div>
			</article>
		)
	} else {
		return (
			<article className="mw5 tc dib bg-white br3 pa3 ma3 ba b--black-10">
			  <div className="tc">
			    <h1 className="tc f4 flex flex-wrap">{name}</h1>
			    <h2 className="tc f5">{location}</h2>
			    <h3 className="tc f6">{date}</h3>
			    <hr className="mw3 bb bw1 b--black-10" />
			    <div style={{ display: 'flex', justifyContent: 'center'}}>
					<button 
					className="f6 link dim br-pill ba ph3 pv2 mb2 dib mid-gray pointer"
					onClick={() => onRouteChange('competition')}
					>
					Select Role</button>
				</div>
			  </div>
			</article>
		)
	}
	
}

export default Competition;