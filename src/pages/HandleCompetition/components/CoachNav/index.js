import React from 'react';
import { Link, RouterContext } from '../../../../Router';
import { useCompetitionContext } from '../../CompetitionContext';
import { routes } from '../../../../Router/routes';

const CoachNav = () => {
	const { changeCompRoute } = useCompetitionContext();
	const { user, competition} = React.useContext(RouterContext);
	return (
		<div>
				<h1>You are currently coach {user.name} in {competition}</h1>
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