import React from 'react';

const CoachNav = ({ compRoute, onRouteChange }) => {
	return (
		<nav style={{display: 'flex', justifyContent: 'center'}}>
			<p 
				onClick={() => compRoute('home')}
				className="f3 pa3 underline pointer">My Athletes</p>
			<p 
				onClick={() => compRoute('athleteregistration')}
				className="f3 pa3 underline pointer">Register Athlete</p>
			<p 
				onClick={() => onRouteChange('competitionselection')}
				className="f3 pa3 underline pointer">Exit</p>
		</nav>
	)
}

export default CoachNav;