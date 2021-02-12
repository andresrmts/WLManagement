import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { useAuthContext } from '../../../../AuthContext';

const CoachNav = () => {
  const { userName, setRole } = useAuthContext();
  const match = useRouteMatch();

  return (
    <div>
      <h1>You are currently coach {userName} in COMPETITIONNAME</h1>
      <nav style={{ display: 'flex', justifyContent: 'center' }}>
        <Link to={match.url} className="f3 pa3 underline pointer black-90">
          My Athletes
        </Link>
        <Link to={`${match.url}/athleteregistration`} className="f3 pa3 underline pointer black-90">
          Register Athlete
        </Link>
        <Link to="/competitionselection" onClick={() => setRole('')} className="f3 pa3 underline pointer black-90">
          Exit
        </Link>
      </nav>
    </div>
  );
};

export default CoachNav;
