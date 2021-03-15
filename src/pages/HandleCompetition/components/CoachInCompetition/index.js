import React, { useState, useEffect } from 'react';
import CardList from '../../../../components/CardList';
import NextAttempt from '../NextAttempt';
import Table from '../../../../components/Table';
import { useAuthContext } from '../../../../AuthContext';
import { useCompsContext } from '../../../../CompetitionsContext';
import Attempt from '../../../../components/Attempt';

const CoachInCompetition = ({ athletes, lift, toggleTimer, time, changeTime, timer }) => {
  const { changeWeight } = useCompsContext();
  const { userName } = useAuthContext();
  const myAthletes = athletes.filter(athlete => athlete.coachname === userName);
  const [currentChangeCounter, setCurrentChangeCounter] = useState(0);

  const onTheClock = athletes
    .filter(athlete => athlete.attempt < 3)
    .sort((a, b) => {
      if (a[lift] === b[lift]) {
        return a.attempt - b.attempt;
      } else {
        return a[lift] - b[lift];
      }
    });

  useEffect(() => {
    setCurrentChangeCounter(0);
  }, []);

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
    <div className="vh-75-ns cf ph2-ns">
      <div className="vh-25">
        <div className="fl w-60-ns w-100 pa2">
          <NextAttempt lift={lift} timer={timer} time={time} changeTime={changeTime} />
        </div>
        <div className="fl w-auto w-40-ns pa2">
          <div className="flex justify-center tc w-auto outline bg-white pv4 vh-50-l vh-75 overflow-y-scroll">
            <CardList
              toggleTimer={toggleTimer}
              onTheClock={onTheClock[0]}
              time={time}
              lift={lift}
              changeWeight={changeWeight}
              myAthletes={myAthletes}
              setCurrentChangeCounter={setCurrentChangeCounter}
              currentChangeCounter={currentChangeCounter}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center justify-center-l vh-50 vh-75-ns fl w-100">
        <div className="vh-75-ns vh-50 vh-50-l w-75-m w-75-l tc outline bg-white pv4 overflow-y-scroll">
          Next Up
          <Table columns={columns} tableContent={onTheClock} />
        </div>
      </div>
    </div>
  );
};

export default CoachInCompetition;
