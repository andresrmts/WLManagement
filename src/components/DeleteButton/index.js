import React from 'react';
import { useParams } from 'react-router-dom';

const DeleteButton = ({ params, row }) => {
  const { compId } = useParams();
  const { group, onDelete } = params;
  return (
    <button
      onClick={() => onDelete(compId, group, row.id)}
      className="b ph3 pv2 input-reset ba b--black bg-transparent pointer f6 dib no-underline black-90"
    >
      Delete
    </button>
  );
};

export default DeleteButton;
