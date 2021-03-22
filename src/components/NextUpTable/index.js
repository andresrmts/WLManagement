import React, { memo } from 'react';
import Table from '../Table';
import Attempt from '../Attempt';

const NextUpTable = ({ athletes, lift }) => {
  const onTheClock = athletes
    .filter(athlete => athlete.attempt < 3)
    .sort((a, b) => {
      if (a[lift] === b[lift]) {
        return a.attempt - b.attempt;
      } else {
        return a[lift] - b[lift];
      }
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
      columnName: 'Attempt',
      template: Attempt,
    },
    {
      name: lift,
      columnName: lift === 'snatch' ? 'Snatch' : 'CNJ',
    },
  ];
  return <Table tableContent={onTheClock} columns={columns} />;
};

export default memo(NextUpTable);
