import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Timer = ({ timer, attemptTime, setAttemptTime, setTimedOut }) => {
  const { compId } = useParams();
  const calculateTimeLeft = () => {
    let now = Date.now();
    let difference = attemptTime / 1000 - now / 1000;
    if (difference < 0) {
      return 0;
    }
    return difference;
  };
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  const sec = Math.floor(timeLeft % 60);

  const seconds = sec < 10 ? '0' + sec : sec;
  const minutes = Math.floor(timeLeft / 60);

  useEffect(() => {
    if (timer === true) {
      const token = setTimeout(() => setTimeLeft(calculateTimeLeft()), 1000);
      return () => clearTimeout(token);
    }
  });

  useEffect(() => {
    if (timeLeft === 0) {
      if (setTimedOut) {
        setTimedOut(true);
      }
      setAttemptTime(compId, 62000);
    }
  }, [timeLeft]);

  return (
    <h1>
      {minutes}:{seconds}
    </h1>
  );
};

export default Timer;
