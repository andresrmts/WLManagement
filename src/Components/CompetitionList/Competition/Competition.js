import React from 'react';

const Competition = ({ name, location, date, onRouteChange }) => {
	return (
		<article className="mw5 tc dib bg-white br3 pa3 ma3 ba b--black-10">
		  <div className="tc">
		    <h1 className="tc f4">{name}</h1>
		    <h2 className="tc f5">{location}</h2>
		    <h3 className="tc f6">{date}</h3>
		    <hr className="mw3 bb bw1 b--black-10" />
		    <div style={{ display: 'flex', justifyContent: 'center'}}>
				<a 
				className="f6 link dim br-pill ba ph3 pv2 mb2 dib mid-gray"
				onClick={() => onRouteChange('competition')}
				>
				Join</a>
			</div>
		  </div>
		</article>
	)
}

export default Competition;