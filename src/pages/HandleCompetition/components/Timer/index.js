import React, { useEffect } from 'react';

const Timer = ({ time, changeTime, timer }) => {
  const updateTime = () => {
    if (time === 0) {
      changeTime(60);
      return;
    }
    changeTime(time - 1);
  };

  const sec = time % 60;

  const seconds = sec < 10 ? '0' + sec : sec;
  const minutes = Math.floor(time / 60);

  useEffect(() => {
    if (timer) {
      const token = setTimeout(updateTime, 1000);
      return () => clearTimeout(token);
    }
  }, [time, timer]);

  return (
    <h1>
      {minutes}:{seconds}
    </h1>
  );
};

export default Timer;
