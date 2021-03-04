import React from 'react';
import { Link, useParams, useRouteMatch } from 'react-router-dom';
import { useAuthContext } from '../../../../AuthContext';
import { useCompsContext } from '../../../../CompetitionsContext';

const CoachNav = ({ status }) => {
  const { userName, setRole } = useAuthContext();
  const { getCompetition } = useCompsContext();
  const { compId } = useParams();
  const match = useRouteMatch();

  const competition = getCompetition(compId);

  return (
    <div>
      <h1>
        You are currently coach {userName} in {competition.name}
      </h1>
      <nav style={{ display: 'flex', justifyContent: 'center' }}>
        {status === 'started' ? (
          <Link to="/competitions" onClick={() => setRole('')} className="f3 pa3 underline pointer black-90">
            Exit
          </Link>
        ) : (
          <nav style={{ display: 'flex', justifyContent: 'center' }}>
            <Link to={match.url} className="f3 pa3 underline pointer black-90">
              My Athletes
            </Link>
            <Link to={`${match.url}/athleteregistration`} className="f3 pa3 underline pointer black-90">
              Register Athlete
            </Link>
            <Link to="/competitions" onClick={() => setRole('')} className="f3 pa3 underline pointer black-90">
              Exit
            </Link>
          </nav>
        )}
      </nav>
    </div>
  );
};

export default CoachNav;
