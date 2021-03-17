import React from 'react';

const SnatchResult = ({ row }) => {
  if (row.result.cnj.length < 1) {
    return (
      <div className="flex flex-row justify-center">
        <div className="mh3">{row.cnj}</div>
        <div className="mh3">-</div>
        <div className="mh3">-</div>
      </div>
    );
  }
  if (row.result.cnj.length !== 0) {
    return (
      <div className="flex flex-row justify-center">
        {row.result.cnj.map((cnj, i) => {
          if (i === row.attempt) {
            return <div className="mh3">{row.cnj}</div>;
          }
          if (!cnj) {
            return <div className="mh3">-</div>;
          }
          return <div className="mh3">{cnj}</div>;
        })}
      </div>
    );
  }
};

export default SnatchResult;
