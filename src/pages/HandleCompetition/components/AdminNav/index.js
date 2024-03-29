import React, { useState } from 'react';
import { Link, useParams, useRouteMatch } from 'react-router-dom';
import { useAuthContext } from '../../../../AuthContext';
import { useCompsContext } from '../../../../CompetitionsContext';
import Button from '../../../../components/Button';

const AdminNav = ({ status, setStatus, toggleTimer, showState }) => {
  const { getCompetition } = useCompsContext();
  const { compId } = useParams();
  const { setRole } = useAuthContext();
  const match = useRouteMatch();
  const [show, setShow] = useState(false);

  const competition = getCompetition(compId);

  const exitComp = () => {
    setRole('');
  };

  const changeCompStatus = status => {
    setStatus(compId, status);
    toggleTimer(compId);
  };

  const toggleMenu = () => {
    setShow(pS => !pS);
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
          <h1 onClick={() => showState()} className="f3-ns f5">
            You are currently working on {competition.name}
          </h1>
          <nav className="flex flex-row-ns flex-column items-center justify-center">
            <div className="flex">
              <Button
                styles={'f7-ns f5 pointer outline-0 br1 ba bw1 ma2 near-black'}
                text={'START COMPETITION'}
                params={'started'}
                onClick={changeCompStatus}
              />
              <Button
                styles={'dn-ns f7-ns f5 pointer outline-0 br1 ba bw1 ma2 near-black'}
                text={'MENU'}
                onClick={toggleMenu}
              />
            </div>
            <div className="flex flex-row-ns">
              <Link to={match.url} className={`f6 di-ns ${show ? null : 'dn'} pa3 underline pointer black-90`}>
                Pending Registrations
              </Link>
              <Link
                to={`${match.url}/registeredofficials`}
                className={`f6 di-ns ${show ? null : 'dn'} pa3 underline pointer black-90`}
              >
                Accepted Registrations
              </Link>
              <Link
                to={`${match.url}/athletelist`}
                className={`f6 di-ns ${show ? null : 'dn'} pa3 underline pointer black-90`}
              >
                Competitor List
              </Link>
              <Link
                to="/competitions"
                onClick={() => exitComp()}
                className={`f6 di-ns ${show ? null : 'dn'} pa3 underline pointer black-90`}
              >
                Exit
              </Link>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
};

export default AdminNav;
