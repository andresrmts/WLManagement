import React from 'react';
import { Route } from '../router/';
import { routes } from '../router/routes';
import SignIn from '../SignIn/SignIn';
import CompetitionSelection from '../CompetitionSelection/CompetitionSelection';
import Register from '../Register/Register';
import CompetitionCreation from '../CompetitionCreation/CompetitionCreation';
import HandleCompetition from '../HandleCompetition/HandleCompetition';

const AppRouter = ({ user, setSignedIn, adminToggle, onSearchChange, isAdmin, isSignedIn }) => {

  return (
		<div>
			{!isSignedIn &&
			<div>
				<Route path={routes.home.path}>
					<SignIn setSignedIn={setSignedIn} />
				</Route>
				<Route path={routes.register.path}>
					<Register setSignedIn={setSignedIn}/>
				</Route>
			</div>
			}
			{isSignedIn &&
			<div>
				<Route path={routes.competitionselection.path}>
					<CompetitionSelection onSearchChange={onSearchChange} adminToggle={adminToggle} user={user} />
				</Route>
				<Route path={routes.competitioncreation.path}>
					<CompetitionCreation adminToggle={adminToggle} />
				</Route>
				<Route path={routes.competition.path}>
					<HandleCompetition name={user.name} adminToggle={adminToggle} isAdmin={isAdmin} />
				</Route>
			</div>
			}
		</div>
  )
}

export default AppRouter;