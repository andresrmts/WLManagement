import React from "react";
import { Route } from "../../Router";
import { CompetitionProvider } from "../../pages/HandleCompetition/CompetitionContext";
import { routes } from "../../Router/routes";
import SignIn from "../../pages/SignIn";
import CompetitionSelection from "../../pages/CompetitionSelection";
import Register from "../../pages/Register";
import CompetitionCreation from "../../pages/CompetitionCreation";
import HandleCompetition from "../../pages/HandleCompetition";
import { useAuthContext } from "../../AuthContext";

const AppRouter = ({ onSearchChange }) => {
  const { userName, userId } = useAuthContext();

  const isSignedIn = !!userId;

  return (
    <div>
      {!isSignedIn && (
        <div>
          <Route path={routes.home.path}>
            <SignIn />
          </Route>
          <Route path={routes.register.path}>
            <Register />
          </Route>
        </div>
      )}
      {isSignedIn && (
        <div>
          <Route path={routes.competitionselection.path}>
            <CompetitionSelection onSearchChange={onSearchChange} />
          </Route>
          <Route path={routes.competitioncreation.path}>
            <CompetitionCreation />
          </Route>
          <Route path={routes.competition.path}>
            <CompetitionProvider userName={userName}>
              <HandleCompetition />
            </CompetitionProvider>
          </Route>
        </div>
      )}
    </div>
  );
};

export default AppRouter;
