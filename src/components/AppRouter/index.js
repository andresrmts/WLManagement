import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { CompsProvider } from '../../CompetitionsContext';
import SignIn from '../../pages/SignIn';
import Competitions from '../../pages/Competitions';
import Register from '../../pages/Register';
import CompetitionCreation from '../../pages/CompetitionCreation';
import HandleCompetition from '../../pages/HandleCompetition';
import PrivateRoute from '../../PrivateRoute/';

const AppRouter = () => {
  return (
    <Switch>
      <div>
        <Route exact path="/">
          <SignIn />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <CompsProvider>
          <PrivateRoute path="/competitions">
            <Competitions />
          </PrivateRoute>
          <PrivateRoute path="/competitioncreation">
            <CompetitionCreation />
          </PrivateRoute>
          <PrivateRoute path="/competition/:compId">
            <HandleCompetition />
          </PrivateRoute>
        </CompsProvider>
      </div>
    </Switch>
  );
};

export default AppRouter;
