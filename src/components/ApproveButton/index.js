import React from 'react';
import { useParams } from 'react-router-dom';
import { useCompsContext } from '../../CompetitionsContext';

const ApproveButton = ({ group, row }) => {
  const { compId } = useParams();
  const { approveRow } = useCompsContext();
  return (
    <p
      onClick={() => approveRow(compId, group, row)}
      className="b ph3 pv2 input-reset ba b--black bg-transparent pointer f6 dib no-underline black-90"
    >
      Approve
    </p>
  );
};

export default ApproveButton;
