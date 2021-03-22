import React from 'react';
import Light from '../../../../components/Light';

const Result = ({ verdict }) => {
  const length = verdict.filter(vote => vote !== null);
  return (
    <div className="flex center h4 w-25">
      {verdict.map((light, i) => {
        return <Light key={i} decision={light} votes={length.length} />;
      })}
    </div>
  );
};

export default Result;
