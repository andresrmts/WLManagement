import React from 'react';
import { Route, RouterContext } from '../../Router';
import { CompetitionProvider } from '../../pages/HandleCompetition/CompetitionContext';
import { routes } from '../../Router/routes';
import SignIn from '../../pages/SignIn';
import CompetitionSelection from '../../pages/CompetitionSelection';
import Register from '../../pages/Register';
import CompetitionCreation from '../../pages/CompetitionCreation';
import HandleCompetition from '../../pages/HandleCompetition';

const AppRouter = ({ setSignedIn, adminToggle, onSearchChange, isAdmin, isSignedIn }) => {
	const { user } = React.useContext(RouterContext);

  return (
		<div>
			{!isSignedIn && (
				<div>
					<Route path={routes.home.path}>
						<SignIn setSignedIn={setSignedIn} />
					</Route>
					<Route path={routes.register.path}>
						<Register setSignedIn={setSignedIn}/>
					</Route>
				</div>
			)}
			{isSignedIn && (
				<div>
					<Route path={routes.competitionselection.path}>
						<CompetitionSelection user={user} onSearchChange={onSearchChange} adminToggle={adminToggle}/>
					</Route>
					<Route path={routes.competitioncreation.path}>
						<CompetitionCreation adminToggle={adminToggle} />
					</Route>
					<Route path={routes.competition.path}>
						<CompetitionProvider officialName={user.name} >
							<HandleCompetition adminToggle={adminToggle} isAdmin={isAdmin} />
						</CompetitionProvider>
					</Route>
				</div>
				)
			}
		</div>
  )
}

export default AppRouter;