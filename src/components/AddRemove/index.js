import React from 'react';
import DeleteButton from '../DeleteButton';
import ApproveButton from '../ApproveButton';

const AddRemove = props => {
  return (
    <div className="pa0">
      <ApproveButton params={props.params} row={props.row} />
      <DeleteButton params={props.params} row={props.row} />
    </div>
  );
};

export default AddRemove;
