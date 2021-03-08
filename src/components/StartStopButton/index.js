import React from 'react';

const Button = ({ text, onClick, styles }) => {
  return (
    <button onClick={() => onClick()} className={styles}>
      {text}
    </button>
  );
};

export default Button;
