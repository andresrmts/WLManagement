import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const TableRow = ({ row, columns, updateTable, specificProps, approveRemove }) => {
  const [editCell, setEditCell] = useState(null);

  const { compId } = useParams();

  const onSubmit = (e, prop) => {
    if (e.key === 'Enter' && e.target.value !== '') {
      updateTable(compId, row.name, prop, e.target.value);
      setEditCell('');
    } else if (e.key === 'Enter') {
      setEditCell('');
    }
  };

  const isEditableCell = column => {
    if (editCell === column.name && column.editable) {
      return <input placeholder={`${column.name}`} onKeyPress={e => onSubmit(e, column.name)} type="number"></input>;
    } else if (column.template) {
      let Component = column.template;
      return <Component row={row} group={column.templateParams} />;
    }
    return row[column.name];
  };

  return (
    <tr className="stripe-dark">
      {columns.map(column =>
        !column.hidden ? (
          <td key={column.name} headers={`${column.name}`} onClick={() => setEditCell(column.name)} className="tc pa3">
            {isEditableCell(column)}
          </td>
        ) : null,
      )}
    </tr>
  );
};

export default TableRow;
