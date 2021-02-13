import React from 'react';
// import { Route } from '../../Router';
import { Switch, Route } from 'react-router-dom';
import { CompetitionProvider } from '../../pages/HandleCompetition/CompetitionContext';
// import { routes } from '../../Router/routes';
import SignIn from '../../pages/SignIn';
import CompetitionSelection from '../../pages/CompetitionSelection';
import Register from '../../pages/Register';
import CompetitionCreation from '../../pages/CompetitionCreation';
import HandleCompetition from '../../pages/HandleCompetition';
import { useAuthContext } from '../../AuthContext';

const AppRouter = ({ onSearchChange }) => {
  const { userName, userId } = useAuthContext();

  const isSignedIn = !!userId;

  return (
    <Switch>
      <div>
        {!isSignedIn && (
          <div>
            <Route exact path="/">
              <SignIn />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
          </div>
        )}
        {isSignedIn && (
          <div>
            <Route path="/competitionselection">
              <CompetitionSelection onSearchChange={onSearchChange} />
            </Route>
            <Route path="/competitioncreation">
              <CompetitionCreation />
            </Route>
            <Route path="/competition/:compId">
              <CompetitionProvider userName={userName}>
                <HandleCompetition />
              </CompetitionProvider>
            </Route>
          </div>
        )}
      </div>
    </Switch>
  );
};

export default AppRouter;
