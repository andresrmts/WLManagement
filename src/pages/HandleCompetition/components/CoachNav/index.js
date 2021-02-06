import React from 'react';
import { Link, RouterContext } from '../../../../Router';
import { useCompetitionContext } from '../../CompetitionContext';
import { routes } from '../../../../Router/routes';
import { useAuthContext } from '../../../../AuthContext';

const CoachNav = () => {
	const { changeCompRoute } = useCompetitionContext();
	const { competition } = React.useContext(RouterContext);
	const { userName } = useAuthContext();
	return (
		<div>
				<h1>You are currently coach {userName} in {competition}</h1>
			<nav style={{display: 'flex', justifyContent: 'center'}}>
				<p 
					onClick={() => changeCompRoute('home')}
					className="f3 pa3 underline pointer">My Athletes</p>
				<p 
					onClick={() => changeCompRoute('athleteregistration')}
					className="f3 pa3 underline pointer">Register Athlete</p>
				<Link to={routes.competitionselection.path}	className="f3 pa3 underline pointer">Exit</Link>
			</nav>
		</div>
	)
}

export default CoachNav;