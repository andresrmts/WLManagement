import React, { useState } from 'react';
import CompetitionList from '../../components/CompetitionList';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../AuthContext';
import { useCompsContext } from '../../CompetitionsContext';

const competitions = ({ adminToggle, onSearchChange }) => {
  const { userName, userId } = useAuthContext();
  const { getMyCompetitions, getActiveCompetitions } = useCompsContext();
  const [yourComps] = useState(getMyCompetitions(userId));
  const [activeComps] = useState(getActiveCompetitions(userId));

  return (
    <div>
      <p className="pa4 tc" style={{ display: 'flex', justifyContent: 'center' }}>
        You are signed in as {userName}. Please Create a new Competition or join an existing competition.
      </p>
      <div>
        <div className="fl w-100 w-50-ns pa2 tc" style={{ display: 'flex', justifyContent: 'center' }}>
          <Link to="/competitioncreation" className="pointer f6 link dim br-pill ba ph3 pv2 mb2 mid-gray no-underline">
            New Competition
          </Link>
        </div>
        <div className="fl w-100 w-50-ns pa1 black-80" style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="measure">
            <label htmlFor="competition" className="f6 b db mb2">
              Search for a competition
            </label>
            <input
              onChange={onSearchChange}
              id="competitionSearch"
              className="input-reset ba b--black-20 pa2 mb2 db w-100"
              type="text"
              aria-describedby="name-desc"
            />
          </div>
        </div>
        <div className="fl w-100 w-50-ns pa2 tc">
          <h1>Your Competitions</h1>
          <div>
            <CompetitionList competitions={yourComps} />
          </div>
        </div>
      </div>
      <div className="fl w-100 w-50-ns pa2 tc">
        <h1>Available Competitions</h1>
        <CompetitionList competitions={activeComps} />
      </div>
    </div>
  );
};

export default competitions;
