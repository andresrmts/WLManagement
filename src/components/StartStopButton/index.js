import React from 'react';

const Button = ({ text, onClick, styles, params }) => {
  return (
    <button onClick={() => onClick(params)} className={styles}>
      {text}
    </button>
  );
};

export default Button;
