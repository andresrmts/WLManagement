import React, { useState, useEffect } from 'react';
import CompetitionList from '../../../../components/CompetitionList';
import NextAttempt from '../NextAttempt';
import Table from '../../../../components/Table';
import { useCompetitionContext } from '../../CompetitionContext';
import { useAuthContext } from '../../../../AuthContext';

const CoachInCompetition = () => {
  const { registeredAthletes, lift, changeWeight, toggleTimer, time } = useCompetitionContext();
  const { userName } = useAuthContext();
  const [myAthletes] = useState(registeredAthletes.filter(athlete => athlete.coachname === userName));
  const [onTheClock, setOnTheClock] = useState(
    registeredAthletes
      .filter(athlete => athlete.attempt < 3)
      .sort((a, b) => {
        if (a[lift] === b[lift]) {
          return a.attempt - b.attempt;
        } else {
          return a[lift] - b[lift];
        }
      }),
  );
  const [currentChangeCounter, setCurrentChangeCounter] = useState(0);

  useEffect(() => {
    setOnTheClock(
      registeredAthletes
        .filter(athlete => athlete.attempt < 3)
        .sort((a, b) => {
          if (a[lift] === b[lift]) {
            return a.attempt - b.attempt;
          } else {
            return a[lift] - b[lift];
          }
        }),
    );
  }, [registeredAthletes, lift]);

  useEffect(() => {
    setCurrentChangeCounter(0);
  }, []);

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

  const props = { name: '', attempt: '', [lift]: '', coachname: '' };

  return (
    <div className="cf ph2-ns">
      <div className="fl w-100 w-60-ns pa2">
        <NextAttempt />
      </div>
      <div className="fl w-100 w-40-ns pa2 mv4">
        <div className="tc outline bg-white pv4">
          Your Competitors
          <CompetitionList
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
      <div className="fl w-100 w-100-ns pa2">
        <div className="tc outline bg-white pv4">
          Next Up
          <Table props={props} headers={headers} tableContent={onTheClock} />
        </div>
      </div>
    </div>
  );
};

export default CoachInCompetition;
