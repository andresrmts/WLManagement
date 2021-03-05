import React, { useState } from 'react';
import CardList from '../../components/CardList';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../AuthContext';
import { useCompsContext } from '../../CompetitionsContext';

const Competitions = ({ onSearchChange }) => {
  const { userName, userId } = useAuthContext();
  const { getMyCompetitions, getActiveCompetitions } = useCompsContext();
  const [yourComps] = useState(getMyCompetitions(userId));
  const [activeComps] = useState(getActiveCompetitions(userId));

  return (
    <div>
      <p className="flex justify-center pa1 tc">
        You are signed in as {userName}. Please Create a new Competition or join an existing competition.
      </p>
      <div>
        <div className="flex justify-center fl w-100 w-50-ns pa2 tc">
          <Link to="/competitioncreation" className="pointer f5 link dim br-pill ba ph3 pv2 mb2 mid-gray no-underline">
            New Competition
          </Link>
        </div>
        <div className="flex justify-center fl w-100 w-50-ns pa1 black-80">
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
          <h1 className="f4">Your Competitions</h1>
          <div>
            <CardList competitions={yourComps} />
          </div>
        </div>
      </div>
      <div className="fl w-100 w-50-ns pa2 tc">
        <h1 className="f4">Available Competitions</h1>
        <CardList competitions={activeComps} />
      </div>
    </div>
  );
};

export default Competitions;
