import React from 'react';

const SnatchResult = ({ row, params }) => {
  const { lift, onTheClock } = params;
  return (
    <div className="flex flex-row justify-center">
      {row.result.snatch
        .sort((a, b) => b - a)
        .map((snatch, i) => {
          if (i === row.attempt && lift === 'snatch') {
            return <div className={`mh3 ${onTheClock.name === row.name ? 'red' : null}`}>{row.snatch}</div>;
          }
          if (!snatch) {
            return <div className="mh3">-</div>;
          }
          return <div className="mh3">{snatch}</div>;
        })}
    </div>
  );
};

export default SnatchResult;
