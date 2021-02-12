import React from 'react';
import { Link } from 'react-router-dom';
import { useCompetitionContext } from '../../CompetitionContext';
import { useAuthContext } from '../../../../AuthContext';

const CoachNav = () => {
  const { changeCompRoute } = useCompetitionContext();
  // const { competition } = React.useContext(RouterContext);
  const { userName, setRole } = useAuthContext();

  return (
    <div>
      <h1>You are currently coach {userName} in COMPETITIONNAME</h1>
      <nav style={{ display: 'flex', justifyContent: 'center' }}>
        <p onClick={() => changeCompRoute('home')} className="f3 pa3 underline pointer">
          My Athletes
        </p>
        <p onClick={() => changeCompRoute('athleteregistration')} className="f3 pa3 underline pointer">
          Register Athlete
        </p>
        <Link to="/competitionselection" onClick={() => setRole('')} className="f3 pa3 underline pointer">
          Exit
        </Link>
      </nav>
    </div>
  );
};

export default CoachNav;
