import React from 'react';
import NextAttempt from '../NextAttempt';
import Table from '../../../../components/Table';

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

  const headers = [
    {
      header: 'Name',
      styles: 'fw6 pa3 bg-white',
    },
    {
      header: 'Attempt',
      styles: 'fw6 pa3 bg-white',
    },
    {
      header: lift,
      styles: 'fw6 pa3 bg-white',
    },
  ];

  const props = { name: '', attempt: '', [lift]: '' };

  return (
    <div className="cf ph2-ns">
      <div className="flex">
        <div className="pointer ba tc w-20 center" onClick={() => toggleTimer()}>
          {timer === true ? <p className="pointer">Stop</p> : <p className="pointer">Start</p>}
        </div>
        {lift === 'snatch' ? (
          <div onClick={() => nextLift()} className="ba tc w-20 center">
            <p>Go to CNJ</p>
          </div>
        ) : (
          ''
        )}
      </div>
      <div className="fl w-100 w-60-ns pa2 tc">
        Next Attempt
        <NextAttempt timer={timer} changeTime={changeTime} time={time} lift={lift} />
      </div>
      <div className="fl w-100 w-40-ns pa2">
        <div className="tc outline bg-white pv4">
          Next Up
          <Table props={props} headers={headers} tableContent={onTheClock} />
        </div>
      </div>
    </div>
  );
};

export default CompetitionAdmin;
