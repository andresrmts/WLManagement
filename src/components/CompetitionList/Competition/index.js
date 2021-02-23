import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAuthContext } from '../../../AuthContext';

const Competition = ({
  name,
  location,
  id,
  attempt,
  cnj,
  snatch,
  onTheClock,
  setCurrentChangeCounter,
  currentChangeCounter,
  changeWeight,
  lift,
  toggleTimer,
  time,
  authorId,
  officials,
}) => {
  const [weight, setWeight] = useState(lift === 'snatch' ? snatch : cnj);
  const { compId } = useParams();
  const { userId } = useAuthContext();
  const changeAttemptWeight = () => {
    if (onTheClock.name === name) {
      if (currentChangeCounter < 2 && time.seconds > 30) {
        changeWeight(compId, { name }, weight, lift);
        toggleTimer();
        setCurrentChangeCounter(prev => prev + 1);
        return;
      }
      alert('You are only allowed 2 changes when athlete is on the clock!');
      setWeight(lift === 'snatch' ? snatch : cnj);
      return;
    }
    changeWeight(compId, { name }, weight, lift);
  };

  if (officials && (userId === authorId || officials.find(official => official.id === userId))) {
    return (
      <article className="mw5 tc dib bg-white br3 pa3 ma3 ba b--black-10">
        <div className="tc">
          <h1 className="tc f4">{name}</h1>
          <h2 className="tc f5">{location}</h2>
          <h3 className="tc f6">{id}</h3>
          <hr className="mw3 bb bw1 b--black-10" />
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Link
              to={`/competition/${id}`}
              className="f6 link dim br-pill ba ph3 pv2 mb2 dib mid-gray pointer no-underline black-90"
            >
              {userId === authorId ? 'Admin' : 'Handle'}
            </Link>
          </div>
        </div>
      </article>
    );
  } else if (lift) {
    return (
      <article className="mw5 tc dib bg-white br3 pa3 ma3 mh4 ba b--black-10">
        <div className="tc">
          <h1 className={`tc center f4 flex flex-wrap ${onTheClock.name === name ? 'red' : ''}`}>{name}</h1>
          <h2 className="tc f5">Attempt: {attempt + 1}</h2>
          <h3 className="tc f6">Next weight: {weight}</h3>
          <p
            className="pointer ba w-25 flex center pa1"
            onClick={() => {
              if (onTheClock.name === name && time.seconds < 31) {
                alert('No changes allowed when 30sec remaining on clock');
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
  }
  return (
    <article className="mw5 tc dib bg-white br3 pa3 ma3 ba b--black-10">
      <div className="tc">
        <h1 className="tc center f4 flex flex-wrap">{name}</h1>
        <h2 className="tc f5">{location}</h2>
        <h3 className="tc f6">{id}</h3>
        <hr className="mw3 bb bw1 b--black-10" />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Link
            to={`/competition/${id}`}
            className="f6 link dim br-pill ba ph3 pv2 mb2 dib mid-gray pointer no-underline black-90"
          >
            Select Role
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Competition;
