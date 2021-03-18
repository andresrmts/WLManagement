import React from 'react';

const CnJResult = ({ row, params }) => {
  const { lift } = params;
  if (row.result.cnj[0] === null) {
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
        {row.result.cnj
          .sort((a, b) => b - a)
          .map((cnj, i) => {
            if (i === row.attempt && lift === 'cnj') {
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

export default CnJResult;
