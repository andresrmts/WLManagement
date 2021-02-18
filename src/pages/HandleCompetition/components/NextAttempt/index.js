import React, { useEffect, useState } from 'react';
import Timer from '../Timer';
import { useCompsContext } from '../../../../CompetitionsContext';
import { useParams } from 'react-router-dom';

const NextAttempt = ({ setTimedOut, changeTime, time, timer, lift }) => {
  const { compId } = useParams();
  const { getCompetition } = useCompsContext();
  const competition = getCompetition(compId);
  const [next, setNext] = useState(
    competition.athletes
      .filter(athlete => athlete.attempt < 3)
      .sort((a, b) => {
        if (a[lift] === b[lift]) {
          return a.attempt - b.attempt;
        } else {
          return a[lift] - b[lift];
        }
      }),
  );

  useEffect(() => {
    setNext(
      competition.athletes
        .filter(athlete => athlete.attempt < 3)
        .sort((a, b) => {
          if (a[lift] === b[lift]) {
            return a.attempt - b.attempt;
          } else {
            return a[lift] - b[lift];
          }
        }),
    );
  }, [competition.athletes]);

  if (next.length > 0) {
    return (
      <article className="br2 ba dark-gray b--black-10 mv4 w-80 center">
        <div className="pa2 ph3-ns pb3-ns">
          <div className="mt1">
            <div className="flex flex-column justify-around">
              <Timer timer={timer} time={time} changeTime={changeTime} setTimedOut={setTimedOut} />
              <h1 className="f2 pa2">{next[0].name}</h1>
              <h1 className="f2 pa2">Attempt: {next[0].attempt + 1}</h1>
            </div>
            <div className="flex justify-around">
              <h1 className="f2-m pa3">{lift === 'snatch' ? 'Snatch' : 'Clean and Jerk'}</h1>
              <h1 className="f2-m pa3">Weight: {next[0][lift]}</h1>
            </div>
          </div>
        </div>
      </article>
    );
  } else {
    return <h1>No more attempts left</h1>;
  }
};

export default NextAttempt;
