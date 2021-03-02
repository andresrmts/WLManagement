import React from 'react';
import TableRow from './TableRow';

const Table = ({ headers, tableContent, props, updateTable }) => {
  return (
    <div className="pa4">
      <div className="center overflow-auto">
        <table className="f6 w-100 mw8" cellSpacing="0">
          <thead>
            <tr className="stripe-dark">
              {headers.map((header, i) => {
                return (
                  <th key={i} id={`${header.header}`} className={`${header.styles}`}>
                    {header.header}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody className="lh-copy">
            {tableContent.map(row => {
              return <TableRow key={row.id} row={row} columns={props} updateTable={updateTable} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
