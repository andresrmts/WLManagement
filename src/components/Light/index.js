import React from 'react';

const Light = ({ decision, length }) => {
  const decisionLight = () => {
    if (length !== 3) {
      return 'bg-black';
    }
    if (decision > 0) {
      return 'bg-white';
    }
    return 'bg-red';
  };

  return <div className={`w-25 ml3 h-25 outline ${decisionLight()}`}></div>;
};

export default Light;
