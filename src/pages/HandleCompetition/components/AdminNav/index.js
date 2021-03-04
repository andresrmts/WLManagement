import React from 'react';
import { Link, useParams, useRouteMatch } from 'react-router-dom';
import { useAuthContext } from '../../../../AuthContext';
import { useCompsContext } from '../../../../CompetitionsContext';

const AdminNav = ({ status, setStatus }) => {
  const { getCompetition } = useCompsContext();
  const { compId } = useParams();
  const { setRole } = useAuthContext();
  const match = useRouteMatch();

  const competition = getCompetition(compId);

  const exitComp = () => {
    setRole('');
  };

  return (
    <div>
      <h1>You are currently working on {competition.name}</h1>
      {status === 'started' ? (
        <nav style={{ display: 'flex', justifyContent: 'center' }}>
          <Link to={match.url} onClick={() => setStatus('paused')} className="f6 pa3 underline pointer red ba">
            PAUSE COMPETITION
          </Link>
          <Link to={match.url} className="f6 pa3 underline pointer black-90">
            Competition Home
          </Link>
        </nav>
      ) : status === 'paused' ? (
        <nav style={{ display: 'flex', justifyContent: 'center' }}>
          <Link to={match.url} onClick={() => setStatus('started')} className="f6 pa3 underline pointer red ba">
            START COMPETITION
          </Link>
          <Link to={match.url} className="f6 pa3 underline pointer black-90">
            Competition Home
          </Link>
        </nav>
      ) : (
        <nav style={{ display: 'flex', justifyContent: 'center' }}>
          <Link to={match.url} onClick={() => setStatus('started')} className="f6 pa3 underline pointer red ba">
            START COMPETITION
          </Link>
          <Link to={match.url} className="f6 pa3 underline pointer black-90">
            Pending Registrations
          </Link>
          <Link to={`${match.url}/registeredofficials`} className="f6 pa3 underline pointer black-90">
            Accepted Registrations
          </Link>
          <Link to={`${match.url}/athletelist`} className="f6 pa3 underline pointer black-90">
            Competitor List
          </Link>
          <Link to="/competitions" onClick={() => exitComp()} className="f6 pa3 underline pointer black-90">
            Exit
          </Link>
        </nav>
      )}
    </div>
  );
};

export default AdminNav;
