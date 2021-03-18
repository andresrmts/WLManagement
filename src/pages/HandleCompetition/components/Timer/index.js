import React, { useEffect } from 'react';
import { useParams } from 'react-router';

const Timer = ({ time, changeTime, timer }) => {
  const { compId } = useParams();
  const updateTime = () => {
    if (time === 0) {
      changeTime(compId, 60);
      return;
    }
    changeTime(compId, time - 1);
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
