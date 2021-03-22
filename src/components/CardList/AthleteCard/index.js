import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ErrorPopup from '../../ErrorPopup';
import Button from '../../Button';

const AthleteCard = ({ name, onTheClock, attempt, attemptTime, lift, snatch, cnj, changeWeight, toggleTimer }) => {
  const { compId } = useParams();
  const [showError, setShowError] = useState(null);
  const [weight, setWeight] = useState(lift === 'snatch' ? snatch : cnj);
  const [currentChangeCounter, setCurrentChangeCounter] = useState(0);

  useEffect(() => {
    setCurrentChangeCounter(0);
  }, []);

  const changeAttemptWeight = () => {
    const time = (attemptTime - Date.now()) / 1000;
    if (onTheClock.name !== name) {
      changeWeight(compId, { name }, weight, lift);
      return;
    }
    if (onTheClock.name === name && currentChangeCounter < 2 && time > 30) {
      changeWeight(compId, { name }, weight, lift);
      toggleTimer(compId);
      setCurrentChangeCounter(prev => prev + 1);
      return;
    }
    setWeight(lift === 'snatch' ? snatch : cnj);
    setShowError('You are only allowed 2 changes when athlete is on the clock!');
    return;
  };

  const addWeight = () => {
    const time = (attemptTime - Date.now()) / 1000;
    if (onTheClock.name === name && time < 31) {
      setShowError('No changes allowed when 30sec remaining on clock');
      return;
    }
    setWeight(weight + 1);
  };

  return (
    <article className="h-inherit mw-100 tc dib bg-white br3 pa3 ma3 mh4 ba b--black-10 relative">
      <div className="flex flex-column tc">
        {showError ? <ErrorPopup closeError={setShowError} message={showError} /> : null}
        <h1 className={`tc center f4 flex flex-wrap ${onTheClock.name === name ? 'red' : ''}`}>{name}</h1>
        <h2 className="tc f5">Attempt: {attempt + 1}</h2>
        <h3 className="tc f6">Next weight: {weight}</h3>
        <Button
          styles={'flex center f6 w-25 pointer outline-0 br1 ba bw1 ph3 pv2 ma2 near-black'}
          text={'+'}
          onClick={addWeight}
        />
        <Button
          styles={'f6 pointer outline-0 br1 ba bw1 ph3 pv2 ma2 near-black'}
          text={'Approve'}
          onClick={changeAttemptWeight}
        />
      </div>
    </article>
  );
};

export default AthleteCard;
