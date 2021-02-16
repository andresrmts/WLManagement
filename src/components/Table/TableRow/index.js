import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';

const TableRow = ({ rowProps, outSideProps }) => {
  const [athleteName, setAthleteName] = useState('');

  const { compId } = useParams();

  useEffect(() => {
    setAthleteName(rowProps.name);
  }, [rowProps]);

  const callFunction = prop => {
    if (outSideProps.functions && outSideProps.functions[prop] && typeof outSideProps.functions[prop] === 'function') {
      outSideProps.functions[prop](compId, athleteName);
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
