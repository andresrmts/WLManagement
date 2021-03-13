import React from 'react';

const Light = ({ decision }) => {
  const { result, votes } = decision;
  return (
    <div className={`w-25 ml3 h-25 outline ${votes !== 3 ? 'bg-black' : result > 0 ? 'bg-white' : 'bg-red'}`}></div>
  );
};

export default Light;
