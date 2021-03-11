import React from 'react';
import { useParams } from 'react-router-dom';

const ApproveButton = ({ params, row }) => {
  const { compId } = useParams();
  const { group, onApprove } = params;
  return (
    <button
      onClick={() => onApprove(compId, group, row)}
      className="b ph3 pv2 input-reset ba b--black bg-transparent pointer f6 dib no-underline black-90"
    >
      Approve
    </button>
  );
};

export default ApproveButton;
