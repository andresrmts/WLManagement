import React from 'react';

const LiftResult = ({ row, params }) => {
  const { currentLift, lift, onTheClock } = params;
  return (
    <div className="flex flex-row justify-center">
      {row.result[lift]
        .sort((a, b) => {
          a = Math.abs(a);
          b = Math.abs(b);
          return b - a;
        })
        .map((resultWeight, i) => {
          if (resultWeight < 0) {
            resultWeight = Math.abs(resultWeight) + 'x';
          }
          if (i === row.attempt && lift === currentLift) {
            return <div className={`mh3 ${onTheClock.name === row.name ? 'red' : null}`}>{row[lift]}</div>;
          }
          if (!resultWeight) {
            return <div className="mh3">{lift !== currentLift && i < 1 ? row[lift] : '-'}</div>;
          }
          return <div className="mh3">{resultWeight}</div>;
        })}
    </div>
  );
};

export default LiftResult;
