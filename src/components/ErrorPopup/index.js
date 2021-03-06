import React from 'react';

const ErrorPopup = ({ message, closeError }) => {
  return (
    <div className="flex items-center justify-center pa4 bg-lightest-blue navy absolute mw4">
      <svg className="w1" viewBox="0 0 32 32" style={{ fill: 'currentcolor' }}>
        <path d="M16 0 A16 16 0 0 1 16 32 A16 16 0 0 1 16 0 M19 15 L13 15 L13 26 L19 26 z M16 6 A3 3 0 0 0 16 12 A3 3 0 0 0 16 6"></path>
      </svg>
      <span className="f7 lh-title ml3">{message}</span>
      <p className="f7 mh1 pointer" onClick={() => closeError(false)}>
        X
      </p>
    </div>
  );
};

export default ErrorPopup;
