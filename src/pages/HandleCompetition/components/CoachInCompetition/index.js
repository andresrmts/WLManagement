import React, { useState, useEffect } from 'react';
import CardList from '../../../../components/CardList';
import NextAttempt from '../NextAttempt';
import Table from '../../../../components/Table';
import { useAuthContext } from '../../../../AuthContext';
import { useCompsContext } from '../../../../CompetitionsContext';

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
      name: 'attempt',
      columnName: 'Attempt',
    },
    {
      name: lift,
      columnName: lift,
    },
  ];

  return (
    <div className="cf ph2-ns">
      <div className="fl w-60-ns pa2">
        <NextAttempt lift={lift} timer={timer} time={time} changeTime={changeTime} />
      </div>
      <div className="fl w-auto w-40-ns pa2 mv4">
        <div className="tc w-auto outline bg-white pv4 vh-50-ns overflow-y-scroll">
          Your Competitors
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
      <div className="fl w-100 pa2">
        <div className="tc outline bg-white pv4">
          Next Up
          <Table columns={columns} tableContent={onTheClock} />
        </div>
      </div>
    </div>
  );
};

export default CoachInCompetition;
