import React from 'react';
import CompetitionCard from './CompetitionCard';
import AthleteCard from './AthleteCard';

const CardList = ({
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
        {competitions.map(comp => {
          return (
            <CompetitionCard
              key={comp.id}
              id={comp.id}
              name={comp.name}
              location={comp.location}
              authorId={comp.authorId}
              officials={comp.officials}
              date={comp.date}
            />
          );
        })}
      </div>
    );
  }
  return (
    <div>
      {myAthletes.map(athlete => {
        return (
          <AthleteCard
            key={athlete.id}
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
};

export default CardList;
