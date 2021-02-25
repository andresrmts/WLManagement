import React, { useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';

const TableRow = ({ rowProps, updateTable, specificProps, approveRemove }) => {
  const [editCell, setEditCell] = useState(null);

  const { compId } = useParams();

  const onSubmit = (e, prop) => {
    if (e.key === 'Enter' && e.target.value !== '') {
      updateTable(compId, rowProps.name, prop, e.target.value);
      setEditCell('');
    } else if (e.key === 'Enter') {
      setEditCell('');
    }
  };

  const setInputType = prop => {
    if (prop === 'weight' || prop === 'snatch' || prop === 'cnj') {
      return 'number';
    } else {
      return 'text';
    }
  };

  const isEditableCell = (i, prop) => {
    if (editCell === i && (prop === 'weight' || prop === 'snatch' || prop === 'cnj')) {
      return <input placeholder={`${prop}`} onKeyPress={e => onSubmit(e, prop)} type={setInputType(prop)}></input>;
    } else if (rowProps[prop] === 'undefined' && specificProps) {
      return specificProps.map(prop => (
        <p className="pointer" onClick={() => approveRemove(compId, rowProps, prop)}>
          {prop}
        </p>
      ));
    }
    return rowProps[prop];
  };

  return (
    <tr className="stripe-dark">
      {Object.keys(rowProps).map((prop, i) => (
        <td key={i} headers={`${prop}`} onClick={() => setEditCell(i)} className="tc pa3">
          {isEditableCell(i, prop)}
        </td>
      ))}
    </tr>
  );
};

export default TableRow;
