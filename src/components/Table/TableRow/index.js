import React, { useState, useEffect, useCallback } from 'react';

const TableRow = ({ rowProps, outSideProps }) => {
  const [athleteName, setAthleteName] = useState('');

  useEffect(() => {
    setAthleteName(rowProps.name);
  }, [rowProps]);

  const callFunction = prop => {
    if (outSideProps.functions && outSideProps.functions[prop] && typeof outSideProps.functions[prop] === 'function') {
      outSideProps.functions[prop](athleteName);
    }
  };

  return (
    <tr className="stripe-dark">
      {Object.keys(rowProps).map((prop, i) => (
        <td key={i} headers={`${prop}`} onClick={() => callFunction(prop)} className="tc pa3">
          {rowProps[prop]}
        </td>
      ))}
    </tr>
  );
};

export default TableRow;
