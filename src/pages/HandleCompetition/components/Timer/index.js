import React, { useEffect } from 'react';

const Timer = ({ time, changeTime, timer }) => {
  const updateTime = () => {
    if (time.minutes === 0 && time.seconds === 0) {
      changeTime(1, 0);
    } else {
      if (time.seconds === 0) {
        changeTime(time.minutes - 1, 59);
      } else if (timer) {
        changeTime(time.minutes, time.seconds - 1);
      }
    }
  };

  const seconds = time.seconds < 10 ? '0' + time.seconds : time.seconds;

  useEffect(() => {
    if (timer === true) {
      const token = setTimeout(updateTime, 1000);
      const cleanUp = () => clearTimeout(token);
      return cleanUp;
    }
  }, [time.minutes, time.seconds, timer]);

  return (
    <h1>
      {time.minutes}:{seconds}
    </h1>
  );
};

export default Timer;
