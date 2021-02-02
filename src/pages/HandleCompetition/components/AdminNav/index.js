import React from 'react';
import { Link, RouterContext } from '../../../../Router';
import { useCompetitionContext } from '../../CompetitionContext';
import { routes } from '../../../../Router/routes';

const AdminNav = ({compRoute, adminToggle }) => {
	const { status, setstatus} = useCompetitionContext();
	return (
		<div>
			<RouterContext.Consumer>
				{context => (
					<h1>You are currently working on {context.competition}</h1>
				)}
			</RouterContext.Consumer>
				{status === 'started' 
					? 	<nav style={{display: 'flex', justifyContent: 'center'}}>
							<p 
							onClick={() => setstatus('paused')}
							className="f6 pa3 underline pointer red ba">PAUSE COMPETITION</p>
							<p 
							onClick={() => compRoute('home')}
							className="f6 pa3 underline pointer">Competition Home</p>
						</nav>
					:	(status === 'paused'
							? 	<nav style={{display: 'flex', justifyContent: 'center'}}>
									<p 
									onClick={() => setstatus('started')}
									className="f6 pa3 underline pointer red ba">START COMPETITION</p>
									<p 
									onClick={() => compRoute('home')}
									className="f6 pa3 underline pointer">Competition Home</p>
								</nav>
							: 	<nav style={{display: 'flex', justifyContent: 'center'}}>
									<p 
									onClick={() => {
										setstatus('started');
										compRoute('home');
									}}
									className="f6 pa3 underline pointer red ba">START COMPETITION</p>
									<p 
									onClick={() => compRoute('home')}
									className="f6 pa3 underline pointer">Pending registrations</p>
									<p 
									onClick={() => compRoute('registered')}
									className="f6 pa3 underline pointer">Accepted Registrations</p>
									<p 
									onClick={() => compRoute('athletelist')}
									className="f6 pa3 underline pointer">Competitor List</p>
									<Link to={routes.competitionselection.path} onClick={() => adminToggle(false)} className="f6 pa3 underline pointer">Exit</Link>
								</nav>
						)
					}
		</div>
	)
}

export default AdminNav;