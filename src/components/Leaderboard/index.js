import React from 'react';
import Table from '../Table';
import LiftResult from './LiftResult';
import TotalResult from './TotalResult';

const Leaderboard = ({ athletes, lift, onTheClock }) => {
  const sortedAthletes = athletes.sort((a, b) => {
    const bsnatch = b.result.snatch.sort((a, b) => b - a)[0];
    const bcnj = b.result.cnj.sort((a, b) => b - a)[0];
    const asnatch = a.result.snatch.sort((a, b) => b - a)[0];
    const acnj = a.result.cnj.sort((a, b) => b - a)[0];

    const total = (snatch, cnj) => {
      if (snatch < 0 || !snatch || cnj < 0 || !cnj) {
        return 0;
      }
      return snatch + cnj;
    };

    const btotal = total(bsnatch, bcnj);
    const atotal = total(asnatch, acnj);
    if (lift === 'snatch') {
      return bsnatch - asnatch;
    }
    return btotal - atotal;
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
      template: LiftResult,
      templateParams: { currentLift: lift, lift: 'snatch', onTheClock: onTheClock },
      columnName: 'Snatch',
    },
    {
      template: LiftResult,
      templateParams: { currentLift: lift, lift: 'cnj', onTheClock: onTheClock },
      columnName: 'Clean & Jerk',
    },
    {
      template: TotalResult,
      columnName: 'Total',
    },
  ];

  return <Table tableContent={sortedAthletes} columns={columns} />;
};

export default Leaderboard;
