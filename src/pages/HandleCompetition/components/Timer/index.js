import React, { useEffect } from 'react';
import { useCompetitionContext } from '../../CompetitionContext';

const Timer = ({ setTimedOut }) => {
  const { time, changeTime, timer } = useCompetitionContext();

  const updateTime = () => {
    if (time.minutes === 0 && time.seconds === 0) {
      if (setTimedOut) {
        setTimedOut(true);
      } else {
        changeTime(1, 0 + '0');
      }
    } else {
      if (time.seconds === 0 + '0' || time.seconds === 0) {
        changeTime(time.minutes - 1, 59);
      } else if (timer === false) {
        changeTime(time.minutes, time.seconds);
      } else if (timer) {
        changeTime(time.minutes, time.seconds - 1);
      }
    }
  };

  useEffect(() => {
    const token = setTimeout(updateTime, 1000);
    const cleanUp = () => clearTimeout(token);

    return cleanUp;
  }, [time.seconds, timer]);

  return (
    <h1>
      {time.minutes}:{time.seconds}
    </h1>
  );
};

export default Timer;
