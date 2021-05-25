import React from 'react';
import { useParams } from 'react-router-dom';

const DeleteButton = ({ params, row }) => {
  const { compId } = useParams();
  const { group, onDelete } = params;

  const deleteParticipant = () => {
    fetch(`http://localhost:3002/competition/${compId}/deleteparticipant`, {
      method: 'delete',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: row.id,
        group,
      }),
    })
      .then(res => res.json())
      .then(onDelete(compId, group, row.id));
  };

  return (
    <button
      onClick={() => deleteParticipant()}
      className="b ph3 pv2 input-reset ba b--black bg-transparent pointer f6 dib no-underline black-90"
    >
      Delete
    </button>
  );
};

export default DeleteButton;
