import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { useAuthContext } from '../../../../AuthContext';
import { useCompetitionContext } from '../../CompetitionContext';

const RoleSelection = () => {
  const match = useRouteMatch();
  const { userName } = useAuthContext();
  const { joinComp } = useCompetitionContext();
  const joinCompetition = role => {
    joinComp(userName, role);
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
      <Link
        to={match.url}
        onClick={() => joinCompetition('changetable')}
        className="f2 link dim br-pill ba ph3 pv2 ma2 dib mid-gray pointer"
      >
        Change Table
      </Link>
    </div>
  );
};

export default RoleSelection;
