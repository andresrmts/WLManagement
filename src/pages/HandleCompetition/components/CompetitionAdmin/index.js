import React from 'react';
import NextAttempt from '../NextAttempt';
import Table from '../../../../components/Table';
import Button from '../../../../components/Button';
import Attempt from '../../../../components/Attempt';

const CompetitionAdmin = ({ athletes, toggleTimer, timer, lift, time, changeTime, nextLift }) => {
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

  return (
    <div className="cf ph2-ns">
      <div className="flex flex-row-m flex-column flex-column-l fl w-100 pa2 tc">
        <div className="flex flex-row-l flex-column-ns center">
          <Button
            styles={`f6 pointer outline-0 br1 ba bw1 ph3 pv2 ma2 ${timer ? 'red' : 'dark-green'}`}
            onClick={toggleTimer}
            text={timer ? 'STOP' : 'START'}
          />
          {lift === 'snatch' ? (
            <Button
              styles={'f6 pointer outline-0 br1 ba bw1 ph3 pv2 ma2 near-black'}
              onClick={nextLift}
              text={'Go to CNJ'}
            />
          ) : null}
        </div>
        <NextAttempt timer={timer} changeTime={changeTime} time={time} lift={lift} />
      </div>
      <div className="flex justify-center justify-center-l fl w-100 pa2">
        <div className="tc w-80 outline bg-white pv4">
          Next Up
          <Table columns={columns} tableContent={onTheClock} />
        </div>
      </div>
    </div>
  );
};

export default CompetitionAdmin;
