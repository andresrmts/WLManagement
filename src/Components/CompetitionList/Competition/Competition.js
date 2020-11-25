import React from 'react';

const Competition = ({ adminToggle, email, useremail, name, location, date, onRouteChange, attempt, cnj, snatch, changeWeight, lift }) => {
	if (useremail && useremail === email) {
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
						adminToggle(true)
					}}
					>
					Admin</button>
				</div>
			  </div>
			</article>
		)
	} else if (adminToggle) {
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
					Handle</button>
				</div>
			  </div>
			</article>
		)
	} else if (lift) {
		return (
			<article className="mw5 tc dib bg-white br3 pa3 ma3 ba b--black-10">
			  <div className="tc">
			    <h1 className="tc f4 flex flex-wrap">{name}</h1>
			    <h2 className="tc f5">Attempt: {attempt + 1}</h2>
			    <h3 className="tc f6">Next weight: {lift === 'snatch' ? snatch : cnj} <p className="pointer" onClick={() => changeWeight({name}, lift === 'snatch' ? snatch : cnj)}>+</p></h3>
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