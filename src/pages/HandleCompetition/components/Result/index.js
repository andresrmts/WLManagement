import React from 'react';
import Light from '../../../../components/Light';

const Result = ({ verdict }) => {
  return (
    <div className="flex center h4 w-25">
      <Light decision={verdict} />
      <Light decision={verdict} />
      <Light decision={verdict} />
    </div>
  );
};

export default Result;
