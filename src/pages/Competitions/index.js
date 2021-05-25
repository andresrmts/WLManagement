import React, { useState } from 'react';
import CardList from '../../components/CardList';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../AuthContext';
import { useCompsContext } from '../../CompetitionsContext';

const Competitions = () => {
  const { userName, userId } = useAuthContext();
  const { getMyCompetitions, getActiveCompetitions } = useCompsContext();
  const [searchBox, setSearchBox] = useState('');

  const yourComps = getMyCompetitions(userId);
  const activeComps = getActiveCompetitions(userId);
  const filteredComps = activeComps.filter(comp => comp.name.toLowerCase().includes(searchBox.toLowerCase()));

  return (
    <div className="flex flex-column">
      <p className="flex justify-center pa1 tc">
        You are signed in as {userName}. Please Create a new Competition or join an existing competition.
      </p>
      <div className="w-100">
        <div className="flex justify-center pb3 fl w-100 tc">
          <Link to="/competitioncreation" className="pointer f6 link dim br-pill ba ph3 pv2 mb2 mid-gray no-underline">
            New Competition
          </Link>
        </div>
        <div className="flex flex-row-ns flex-column justify-center w-100 vh-50">
          <div className="fl w-100 w-40-ns pa2 tc mh4 vh-50-l vh-50 overflow-y-scroll shadow-2 br3">
            <h1 className="f4">Your Competitions</h1>
            <div>
              <CardList competitions={yourComps} />
            </div>
          </div>
          <div className="flex flex-column items-center fl w-100 w-40-ns pa2 tc vh-50-l vh-50 overflow-y-scroll mh4 shadow-2 br3">
            <h1 className="f4">Available Competitions</h1>
            <div className="measure">
              <input
                onChange={e => setSearchBox(e.target.value)}
                id="competitionSearch"
                placeholder="Search"
                className="input-reset ba b--black-20 pa2 mb2 db w-100"
                type="text"
                aria-describedby="name-desc"
              />
            </div>
            <div>
              <CardList competitions={filteredComps} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Competitions;
