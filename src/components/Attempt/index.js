import React, { memo } from 'react';

const Attempt = ({ row }) => <div>{row.attempt + 1}</div>;

export default memo(Attempt);
