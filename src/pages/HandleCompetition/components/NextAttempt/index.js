import React, { useEffect, useState } from 'react';
import Timer from '../Timer';
import { useCompsContext } from '../../../../CompetitionsContext';
import { useParams } from 'react-router-dom';

const NextAttempt = ({ timer, lift, setAttemptTime, attemptTime, setTimedOut }) => {
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
      <article className="flex items-center vh-50 vh-50-m br2 outline ba dark-gray b--black-10 w-auto center">
        <div className="pa2 ph3-ns pb3-ns">
          <div className="mt1">
            <div className="flex flex-column justify-center">
              <Timer
                setTimedOut={setTimedOut}
                attemptTime={attemptTime}
                setAttemptTime={setAttemptTime}
                timer={timer}
              />
            </div>
            <div className="flex justify-around">
              <h1 className="f3-ns f5-m f5 pa2 pa1-m">{next[0].name}</h1>
              <h1 className="f3-ns f5-m f5 pa2 pa1-m">Attempt: {next[0].attempt + 1}</h1>
            </div>
            <div className="flex justify-around">
              <h1 className="f2-ns f4-m f4 pa3">{lift === 'snatch' ? 'Snatch' : 'Clean and Jerk'}</h1>
              <h1 className="f2-ns f4-m f4 pa3">Weight: {next[0][lift]}</h1>
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
