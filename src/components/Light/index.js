import React from 'react';

const Light = ({ decision }) => {
  const { result, votes } = decision;

  const decisionLight = () => {
    if (votes !== 3) {
      return 'bg-black';
    }
    if (result > 0) {
      return 'bg-white';
    }
    return 'bg-red';
  };

  return <div className={`w-25 ml3 h-25 outline ${decisionLight()}`}></div>;
};

export default Light;
