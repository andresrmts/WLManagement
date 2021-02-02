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
				<RouterContext.Consumer>
					{context => (
						<div>
							<Route path={routes.competitionselection.path}>
								<CompetitionSelection user={context.user} onSearchChange={onSearchChange} adminToggle={adminToggle}/>
							</Route>
							<Route path={routes.competitioncreation.path}>
								<CompetitionCreation adminToggle={adminToggle} />
							</Route>
							<Route path={routes.competition.path}>
								<CompetitionProvider>
									<HandleCompetition officialName={context.user.name} adminToggle={adminToggle} isAdmin={isAdmin} />
								</CompetitionProvider>
							</Route>
						</div>
					)}
				</RouterContext.Consumer>
			)}
		</div>
  )
}

export default AppRouter;