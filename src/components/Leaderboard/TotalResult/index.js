import React from 'react';
import { memo } from 'react';

const TotalResult = ({ row }) => {
  const snatch = row.result.snatch.sort((a, b) => b - a)[0];
  const cnj = row.result.cnj.sort((a, b) => b - a)[0];

  if (snatch < 0 || !snatch || cnj < 0 || !cnj) {
    return 0;
  }

  return snatch + cnj;
};

export default memo(TotalResult);
