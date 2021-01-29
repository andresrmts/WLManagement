import React from 'react';
import { Link } from '../../../../Router';
import { routes } from '../../../../Router/routes';

const CoachNav = ({ name, compRoute, onRouteChange }) => {
	return (
		<div>
		<h1>You are currently coach {name} in COMPETITIONNAME</h1>
			<nav style={{display: 'flex', justifyContent: 'center'}}>
				<p 
					onClick={() => compRoute('home')}
					className="f3 pa3 underline pointer">My Athletes</p>
				<p 
					onClick={() => compRoute('athleteregistration')}
					className="f3 pa3 underline pointer">Register Athlete</p>
				{/* <p 
					onClick={() => onRouteChange('competitionselection')}
					className="f3 pa3 underline pointer">Exit</p> */}
				<Link to={routes.competitionselection.path}	className="f3 pa3 underline pointer">Exit</Link>
			</nav>
		</div>
	)
}

export default CoachNav;