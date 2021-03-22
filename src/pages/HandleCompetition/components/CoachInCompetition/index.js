import React, { useState } from 'react';
import CardList from '../../../../components/CardList';
import NextAttempt from '../NextAttempt';
import { useAuthContext } from '../../../../AuthContext';
import { useCompsContext } from '../../../../CompetitionsContext';
import Leaderboard from '../../../../components/Leaderboard';
import Button from '../../../../components/Button';
import NextUpTable from '../../../../components/NextUpTable';

const CoachInCompetition = ({ athletes, lift, toggleTimer, changeTime, timer, setAttemptTime, attemptTime }) => {
  const { changeWeight } = useCompsContext();
  const { userId } = useAuthContext();
  const [table, setTable] = useState('nextUp');
  const myAthletes = athletes.filter(athlete => athlete.coachid === userId);

  const onTheClock = athletes
    .filter(athlete => athlete.attempt < 3)
    .sort((a, b) => {
      if (a[lift] === b[lift]) {
        return a.attempt - b.attempt;
      } else {
        return a[lift] - b[lift];
      }
    });

  const switchTable = table => {
    if (table === 'nextUp') {
      return (
        <div className="vh-75-ns vh-50 vh-50-l w-75-m w-75-l tc outline bg-white pv4 overflow-y-scroll">
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
    <div className="vh-75-ns cf ph2-ns">
      <div className="vh-25">
        <div className="fl w-60-ns w-100 pa2">
          <NextAttempt
            lift={lift}
            timer={timer}
            attemptTime={attemptTime}
            setAttemptTime={setAttemptTime}
            changeTime={changeTime}
          />
        </div>
        <div className="fl w-auto w-40-ns pa2">
          <div className="flex justify-center tc w-auto outline bg-white pv4 vh-50-l vh-75 overflow-y-scroll">
            <CardList
              toggleTimer={toggleTimer}
              onTheClock={onTheClock[0]}
              attemptTime={attemptTime}
              lift={lift}
              changeWeight={changeWeight}
              myAthletes={myAthletes}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-column items-center justify-center justify-center-l vh-50 vh-75-ns fl w-100">
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

export default CoachInCompetition;
