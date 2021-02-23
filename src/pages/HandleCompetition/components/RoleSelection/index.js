import React from 'react';
import { useRouteMatch, Link, useParams } from 'react-router-dom';
import { useAuthContext } from '../../../../AuthContext';
import { useCompsContext } from '../../../../CompetitionsContext';

const RoleSelection = () => {
  const { compId } = useParams();
  const match = useRouteMatch();
  const { userName, userId } = useAuthContext();
  const { joinComp } = useCompsContext();
  const joinCompetition = role => {
    joinComp(compId, userId, userName, role);
  };

  return (
    <div className="tc">
      <Link
        to={match.url}
        onClick={() => joinCompetition('coach')}
        className="f2 link dim br-pill ba ph3 pv2 ma2 dib mid-gray pointer"
      >
        Coach
      </Link>
      <Link
        to={match.url}
        onClick={() => joinCompetition('judge')}
        className="f2 link dim br-pill ba ph3 pv2 ma2 dib mid-gray pointer"
      >
        Judge
      </Link>
    </div>
  );
};

export default RoleSelection;
