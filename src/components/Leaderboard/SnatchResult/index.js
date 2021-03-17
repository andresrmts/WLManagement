import React from 'react';

const SnatchResult = ({ row }) => {
  if (row.result.snatch.length < 1) {
    return (
      <div className="flex flex-row justify-center">
        <div className="mh3">{row.snatch}</div>
        <div className="mh3">-</div>
        <div className="mh3">-</div>
      </div>
    );
  }
  if (row.result.snatch.length !== 0) {
    return (
      <div className="flex flex-row justify-center">
        {row.result.snatch.map((snatch, i) => {
          if (i === row.attempt) {
            return <div className="mh3">{row.snatch}</div>;
          }
          if (!snatch) {
            return <div className="mh3">-</div>;
          }
          return <div className="mh3">{snatch}</div>;
        })}
      </div>
    );
  }
};

export default SnatchResult;
