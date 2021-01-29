import React from 'react';
import { Route } from '../../Router';
import { routes } from '../../Router/routes';
import SignIn from '../../pages/SignIn';
import CompetitionSelection from '../../pages/CompetitionSelection';
import Register from '../../pages/Register';
import CompetitionCreation from '../../pages/CompetitionCreation';
import HandleCompetition from '../../pages/HandleCompetition';

const AppRouter = ({ user, setSignedIn, adminToggle, onSearchChange, isAdmin, isSignedIn }) => {

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
						<CompetitionSelection onSearchChange={onSearchChange} adminToggle={adminToggle} user={user} />
					</Route>
					<Route path={routes.competitioncreation.path}>
						<CompetitionCreation adminToggle={adminToggle} />
					</Route>
					<Route path={routes.competition.path}>
						<HandleCompetition name={user.name} adminToggle={adminToggle} isAdmin={isAdmin} />
					</Route>
				</div>
			)}
		</div>
  )
}

export default AppRouter;