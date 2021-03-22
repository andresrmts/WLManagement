import React, { useState } from 'react';
import NextAttempt from '../NextAttempt';
import Button from '../../../../components/Button';
import Leaderboard from '../../../../components/Leaderboard';
import { useParams } from 'react-router';
import NextUpTable from '../../../../components/NextUpTable';

const CompetitionAdmin = ({ athletes, toggleTimer, timer, lift, nextLift, attemptTime, setAttemptTime }) => {
  const { compId } = useParams();
  const [table, setTable] = useState('nextUp');
  const [currentTimeLeft, setCurrentTimeLeft] = useState(null);
  const onTheClock = athletes
    .filter(athlete => athlete.attempt < 3)
    .sort((a, b) => {
      if (a[lift] === b[lift]) {
        return a.attempt - b.attempt;
      } else {
        return a[lift] - b[lift];
      }
    });

  const startStop = id => {
    if (timer) {
      setCurrentTimeLeft(attemptTime - Date.now());
      toggleTimer(id);
      return;
    }
    toggleTimer(id);
    setAttemptTime(id, currentTimeLeft);
  };

  const switchTable = table => {
    if (table === 'nextUp') {
      return (
        <div className="tc w-80 outline bg-white pv4">
          Next Up
          <NextUpTable athletes={athletes} lift={lift} />
        </div>
      );
    }
    return (
      <div className="vh-75-ns vh-50 vh-50-l w-75-m w-75-l tc outline bg-white pv4 overflow-x-scroll overflow-y-scroll">
        Leaderboard
        <Leaderboard onTheClock={onTheClock[0]} athletes={athletes} lift={lift} />
      </div>
    );
  };

  return (
    <div className="cf ph2-ns">
      <div className="flex flex-row-m flex-column flex-column-l fl w-100 pa2 tc">
        <div className="flex flex-row-l flex-column-ns center">
          <Button
            styles={`f6 pointer outline-0 br1 ba bw1 ph3 pv2 ma2 ${timer ? 'red' : 'dark-green'}`}
            onClick={startStop}
            params={compId}
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
        <NextAttempt timer={timer} attemptTime={attemptTime} setAttemptTime={setAttemptTime} lift={lift} />
      </div>
      <div className="flex flex-column items-center justify-center justify-center-l fl w-100 pa2">
        <Button
          text={table === 'nextUp' ? 'Leaderboard' : 'Next Up'}
          onClick={setTable}
          params={table === 'nextUp' ? 'leaderboard' : 'nextUp'}
          styles={'f6 w-auto pointer outline-0 br1 ba bw1 ph3 pv2 ma2 near-black'}
        />
        {switchTable(table)}
      </div>
    </div>
  );
};

export default CompetitionAdmin;
