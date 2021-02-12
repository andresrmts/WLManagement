import React from 'react';
import { Link } from 'react-router-dom';
import { useCompetitionContext } from '../../CompetitionContext';
import { useAuthContext } from '../../../../AuthContext';

const AdminNav = () => {
  const { status, setstatus, changeCompRoute } = useCompetitionContext();
  // const { competition } = React.useContext(RouterContext);
  const { setIsAdmin, setRole } = useAuthContext();

  const exitComp = () => {
    setIsAdmin(false);
    setRole('');
  };

  return (
    <div>
      <h1>You are currently working on COMPETITIONNAME</h1>
      {status === 'started' ? (
        <nav style={{ display: 'flex', justifyContent: 'center' }}>
          <p onClick={() => setstatus('paused')} className="f6 pa3 underline pointer red ba">
            PAUSE COMPETITION
          </p>
          <p onClick={() => changeCompRoute('home')} className="f6 pa3 underline pointer">
            Competition Home
          </p>
        </nav>
      ) : status === 'paused' ? (
        <nav style={{ display: 'flex', justifyContent: 'center' }}>
          <p onClick={() => setstatus('started')} className="f6 pa3 underline pointer red ba">
            START COMPETITION
          </p>
          <p onClick={() => changeCompRoute('home')} className="f6 pa3 underline pointer">
            Competition Home
          </p>
        </nav>
      ) : (
        <nav style={{ display: 'flex', justifyContent: 'center' }}>
          <p
            onClick={() => {
              setstatus('started');
              changeCompRoute('home');
            }}
            className="f6 pa3 underline pointer red ba"
          >
            START COMPETITION
          </p>
          <p onClick={() => changeCompRoute('home')} className="f6 pa3 underline pointer">
            Pending registrations
          </p>
          <p onClick={() => changeCompRoute('registered')} className="f6 pa3 underline pointer">
            Accepted Registrations
          </p>
          <p onClick={() => changeCompRoute('athletelist')} className="f6 pa3 underline pointer">
            Competitor List
          </p>
          <Link to="/competitionselection" onClick={() => exitComp()} className="f6 pa3 underline pointer">
            Exit
          </Link>
        </nav>
      )}
    </div>
  );
};

export default AdminNav;
