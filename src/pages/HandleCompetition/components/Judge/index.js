import React, { useState, useEffect, useRef } from 'react';
import NextAttempt from '../NextAttempt';
import Button from '../../../../components/Button';

const usePrevious = value => {
  const ref = useRef(null);
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
};

const Judge = ({ athletes, status, time, changeTime, timer, lift, castVote, goToNextAttempt }) => {
  const next = athletes
    .filter(athlete => athlete.attempt < 3)
    .sort((a, b) => {
      if (a[lift] === b[lift]) {
        return a.attempt - b.attempt;
      } else {
        return a[lift] - b[lift];
      }
    });
  const [voted, setVoted] = useState(false);
  const [athlete, setAthlete] = useState('');
  const [weight, setWeight] = useState('');
  const [attempt, setAttempt] = useState('');
  const [timedOut, setTimedOut] = useState(false);

  const prevAthlete = usePrevious(athlete); // Stores the previous athlete name so timer rules could be followed

  let nextAttempt;
  let nextName;

  if (next[0]) {
    nextAttempt = next[0].attempt;
    nextName = next[0].name;
  }

  useEffect(() => {
    if (time.minutes === 0 && time.seconds === 0) {
      setTimedOut(true);
    }
  }, [time]);

  useEffect(() => {
    if (status === 'started' && voted) {
      setTimeout(() => goToNextAttempt(athlete, weight, attempt), 3000);
      setTimeout(() => setVoted(false), 5000);
    }
  }, [voted]);

  useEffect(() => {
    if (timedOut === true) {
      castVote('no');
      setTimedOut(false);
      setVoted(true);
    }
  }, [timedOut]);

  useEffect(() => {
    setAthlete(next.length > 0 ? next[0].name : '');
    setWeight(next.length > 0 ? next[0][lift] : '');
    setAttempt(next.length > 0 ? next[0].attempt : '');
  }, [nextAttempt, nextName]);

  useEffect(() => {
    if (next.length > 0) {
      if (prevAthlete === athlete) {
        changeTime(2, 0);
        return;
      }
      changeTime(1, 0);
    }
  }, [attempt, athlete]);

  const castVerdict = decision => {
    castVote(decision);
    setVoted(true);
  };

  if (status === 'notstarted') {
    return <h1>The competition hasnt started yet. It will start in TIMER</h1>;
  } else if (status === 'started' && voted === false && attempt !== '') {
    return (
      <div className="w-100">
        <div className="flex flex-row-ns flex-column center pa2">
          <Button
            styles={
              'flex items-center h3 vh-50-ns w-75 w-20-ns f6 center white pointer outline-0 br1 ba bw1 ph3 pv2 ma2 bg-green b--green'
            }
            text={'YES'}
            onClick={castVerdict}
            params={'yes'}
          />
          <NextAttempt time={time} changeTime={changeTime} timer={timer} lift={lift} />
          <Button
            styles={
              'flex items-center h3 vh-50-ns w-75 w-20-ns f6 center white pointer outline-0 br1 ba bw1 ph3 pv2 ma2 bg-red b--red'
            }
            text={'NO'}
            onClick={castVerdict}
            params={'no'}
          />
        </div>
      </div>
    );
  } else if (voted) {
    return <h1>You voted already</h1>;
  } else if (status === 'paused') {
    return (
      <div className="w-100">
        <div className="flex flex-row-ns flex-column center pa2">
          <Button
            styles={
              'flex items-center h3 vh-50-ns w-75 w-20-ns f6 center white pointer outline-0 br1 ba bw1 ph3 pv2 ma2 bg-green b--green'
            }
            text={'PAUSED'}
          />
          <NextAttempt time={time} changeTime={changeTime} timer={timer} lift={lift} />
          <Button
            styles={
              'flex items-center h3 vh-50-ns w-75 w-20-ns f6 center white pointer outline-0 br1 ba bw1 ph3 pv2 ma2 bg-red b--red'
            }
            text={'PAUSED'}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h1>No more attempts left</h1>
      </div>
    );
  }
};

export default Judge;
