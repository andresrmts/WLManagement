import React from 'react';
import Table from '../Table';
import SnatchResult from './SnatchResult';
import CnJResult from './CnJResult';

const Leaderboard = ({ athletes, lift }) => {
  const sortedAthletes = athletes.sort((a, b) => {
    if (lift === 'snatch') {
      return b.result.snatch.sort((a, b) => b - a)[0] - a.result.snatch.sort((a, b) => b - a)[0];
    }
    return (
      b.result.snatch.sort((a, b) => b - a)[0] +
      b.result.cnj.sort((a, b) => b - a)[0] -
      (a.result.snatch.sort((a, b) => b - a)[0] + a.result.cnj.sort((a, b) => b - a)[0])
    );
  });

  const columns = [
    {
      name: 'id',
      hidden: true,
    },
    {
      name: 'name',
      columnName: 'Athlete Name',
    },
    {
      name: 'weight',
      columnName: 'BW',
    },
    {
      template: SnatchResult,
      columnName: 'Snatch',
    },
    {
      template: CnJResult,
      columnName: 'Clean & Jerk',
    },
  ];

  return <Table tableContent={sortedAthletes} columns={columns} />;
};

export default Leaderboard;