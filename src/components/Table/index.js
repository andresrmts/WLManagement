import React from 'react';
import TableRow from './TableRow';

const Table = ({ tableContent, columns, updateTable }) => {
  return (
    <div className="pa4">
      <div className="flex justify-center-l overflow-auto">
        <table className="f6 w-100 mw8" cellSpacing="0">
          <thead>
            <tr className="stripe-dark">
              {columns.map((column, i) =>
                !column.hidden ? (
                  <th key={i} id={`${column.columnName}`} className="fw6 pa3 bg-white">
                    {column.columnName}
                  </th>
                ) : null,
              )}
            </tr>
          </thead>
          <tbody className="lh-copy">
            {tableContent.map(row => {
              return <TableRow key={row.id} row={row} columns={columns} updateTable={updateTable} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
