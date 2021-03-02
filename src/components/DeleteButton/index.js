import React from 'react';
import { useParams } from 'react-router-dom';
import { useCompsContext } from '../../CompetitionsContext';

const DeleteButton = ({ group, row }) => {
  const { compId } = useParams();
  const { deleteRow } = useCompsContext();
  return (
    <p
      onClick={() => deleteRow(compId, group, row.id)}
      className="b ph3 pv2 input-reset ba b--black bg-transparent pointer f6 dib no-underline black-90"
    >
      Delete
    </p>
  );
};

export default DeleteButton;
