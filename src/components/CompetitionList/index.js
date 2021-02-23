import React from 'react';
import Competition from './Competition';

const CompetitionList = ({
  competitions,
  myAthletes,
  changeWeight,
  lift,
  onTheClock,
  toggleTimer,
  setCurrentChangeCounter,
  currentChangeCounter,
  time,
}) => {
  if (competitions) {
    return (
      <div>
        {competitions.map((comp, i) => {
          return (
            <Competition
              key={i}
              id={comp.id}
              name={comp.name}
              email={comp.email}
              location={comp.location}
              authorId={comp.authorId}
              officials={comp.officials}
            />
          );
        })}
      </div>
    );
  } else {
    return (
      <div>
        {myAthletes.map((athlete, i) => {
          return (
            <Competition
              key={i}
              name={athlete.name}
              attempt={athlete.attempt}
              snatch={athlete.snatch}
              cnj={athlete.cnj}
              changeWeight={changeWeight}
              lift={lift}
              onTheClock={onTheClock}
              time={time}
              toggleTimer={toggleTimer}
              setCurrentChangeCounter={setCurrentChangeCounter}
              currentChangeCounter={currentChangeCounter}
            />
          );
        })}
      </div>
    );
  }
};

export default CompetitionList;
