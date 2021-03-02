import React from 'react';
import DeleteButton from '../DeleteButton';
import ApproveButton from '../ApproveButton';

const AddRemove = props => {
  return (
    <div>
      <ApproveButton group={props.group} row={props.row} />
      <DeleteButton group={props.group} row={props.row} />
    </div>
  );
};

export default AddRemove;
