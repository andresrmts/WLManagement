import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { useCompetitionContext } from '../../CompetitionContext';
import { useAuthContext } from '../../../../AuthContext';

const AdminNav = () => {
  const { status, setstatus } = useCompetitionContext();
  const { setIsAdmin, setRole } = useAuthContext();
  const match = useRouteMatch();

  const exitComp = () => {
    setIsAdmin(false);
    setRole('');
  };

  return (
    <div>
      <h1>You are currently working on COMPETITIONNAME</h1>
      {status === 'started' ? (
        <nav style={{ display: 'flex', justifyContent: 'center' }}>
          <Link to={match.url} onClick={() => setstatus('paused')} className="f6 pa3 underline pointer red ba">
            PAUSE COMPETITION
          </Link>
          <Link to={match.url} className="f6 pa3 underline pointer black-90">
            Competition Home
          </Link>
        </nav>
      ) : status === 'paused' ? (
        <nav style={{ display: 'flex', justifyContent: 'center' }}>
          <Link to={match.url} onClick={() => setstatus('started')} className="f6 pa3 underline pointer red ba">
            START COMPETITION
          </Link>
          <Link to={match.url} className="f6 pa3 underline pointer black-90">
            Competition Home
          </Link>
        </nav>
      ) : (
        <nav style={{ display: 'flex', justifyContent: 'center' }}>
          <Link to={match.url} onClick={() => setstatus('started')} className="f6 pa3 underline pointer red ba">
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
          <Link to="/competitionselection" onClick={() => exitComp()} className="f6 pa3 underline pointer black-90">
            Exit
          </Link>
        </nav>
      )}
    </div>
  );
};

export default AdminNav;
