import React from 'react';
import { Link, useParams, useRouteMatch } from 'react-router-dom';
import { useAuthContext } from '../../../../AuthContext';
import { useCompsContext } from '../../../../CompetitionsContext';
import Button from '../../../../components/Button';

const AdminNav = ({ status, setStatus, toggleTimer, showState }) => {
  const { getCompetition } = useCompsContext();
  const { compId } = useParams();
  const { setRole } = useAuthContext();
  const match = useRouteMatch();

  const competition = getCompetition(compId);

  const exitComp = () => {
    setRole('');
  };

  const changeCompStatus = status => {
    setStatus(status);
    toggleTimer();
  };

  return (
    <div>
      {status === 'started' ? (
        <nav className="flex justify-center">
          <Button
            styles={'f6 pointer outline-0 br1 ba bw1 ph3 pv2 ma2 near-black'}
            text={'PAUSE COMPETITION'}
            params={'paused'}
            onClick={changeCompStatus}
          />
          <Link to={match.url} className="f6 pa3 underline pointer black-90">
            Competition Home
          </Link>
        </nav>
      ) : status === 'paused' ? (
        <nav className="flex justify-center">
          <Button
            styles={'f6 pointer outline-0 br1 ba bw1 ph3 pv2 ma2 near-black'}
            text={'START COMPETITION'}
            params={'started'}
            onClick={changeCompStatus}
          />
          <Link to={match.url} className="f6 pa3 underline pointer black-90">
            Competition Home
          </Link>
        </nav>
      ) : (
        <div>
          <h1>You are currently working on {competition.name}</h1>
          <nav className="flex justify-center">
            <Button
              styles={'f7 pointer outline-0 br1 ba bw1 ma2 near-black'}
              text={'START COMPETITION'}
              params={'started'}
              onClick={changeCompStatus}
            />
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
        </div>
      )}
    </div>
  );
};

export default AdminNav;
