import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ErrorPopup from '../../ErrorPopup';

const AthleteCard = ({
  name,
  onTheClock,
  attempt,
  time,
  lift,
  snatch,
  cnj,
  changeWeight,
  toggleTimer,
  setCurrentChangeCounter,
  currentChangeCounter,
}) => {
  const { compId } = useParams();
  const [showError, setShowError] = useState(null);
  const [weight, setWeight] = useState(lift === 'snatch' ? snatch : cnj);

  const changeAttemptWeight = () => {
    if (onTheClock.name === name) {
      if (currentChangeCounter < 2 && (time.minutes >= 1 || time.seconds > 30)) {
        changeWeight(compId, { name }, weight, lift);
        toggleTimer();
        setCurrentChangeCounter(prev => prev + 1);
        return;
      }
      setWeight(lift === 'snatch' ? snatch : cnj);
      setShowError('You are only allowed 2 changes when athlete is on the clock!');
      return;
    }
    changeWeight(compId, { name }, weight, lift);
  };

  return (
    <article className="mw5 tc dib bg-white br3 pa3 ma3 mh4 ba b--black-10">
      {showError ? <ErrorPopup closeError={setShowError} message={showError} /> : null}
      <div className="tc">
        <h1 className={`tc center f4 flex flex-wrap ${onTheClock.name === name ? 'red' : ''}`}>{name}</h1>
        <h2 className="tc f5">Attempt: {attempt + 1}</h2>
        <h3 className="tc f6">Next weight: {weight}</h3>
        <p
          className="pointer ba w-25 flex center pa1"
          onClick={() => {
            if (onTheClock.name === name && time.minutes < 1 && time.seconds < 31) {
              setShowError('No changes allowed when 30sec remaining on clock');
              return;
            }
            setWeight(weight + 1);
          }}
        >
          +
        </p>
        <p className="pointer ba pa4 w-50 flex center" onClick={() => changeAttemptWeight()}>
          Approve
        </p>
        <hr className="mw3 bb bw1 b--black-10" />
      </div>
    </article>
  );
};

export default AthleteCard;
