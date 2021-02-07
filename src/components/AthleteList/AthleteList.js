import React from "react";
import Athlete from "./Athlete/Athlete";

const AthleteList = ({
  registeredAthletes,
  inCompetitionAthletes,
  lift,
  name,
  editAthleteWeight,
}) => {
  if (registeredAthletes) {
    return (
      <div className="pa4">
        <div className="center overflow-auto">
          <table className="f6 w-100 mw8" cellSpacing="0">
            <thead>
              <tr className="stripe-dark">
                <th id="name" className="fw6 pa3 bg-white">
                  Name
                </th>
                <th id="age" className="fw6 pa3 bg-white">
                  Age
                </th>
                <th id="weight" className="fw6 pa3 bg-white">
                  Weight
                </th>
                <th id="snatch" className="fw6 pa3 bg-white">
                  Snatch
                </th>
                <th id="cnj" className="fw6 pa3 bg-white">
                  CNJ
                </th>
                <th id="coachname" className="fw6 pa3 bg-white">
                  Coach Name
                </th>
              </tr>
            </thead>
            <tbody className="lh-copy">
              {registeredAthletes.map((athlete, i) => {
                return (
                  <Athlete
                    key={i}
                    name={athlete.name}
                    age={athlete.age}
                    snatch={athlete.snatch}
                    cnj={athlete.cnj}
                    coachName={athlete.coachname}
                    weight={athlete.weight}
                    editAthleteWeight={editAthleteWeight}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  } else {
    return (
      <div className="pa4">
        <div className="center overflow-auto">
          <table className="f6 w-100 mw8" cellSpacing="0">
            <thead>
              <tr className="stripe-dark">
                <th id="name" className="fw6 pa3 bg-white">
                  Name
                </th>
                <th id="attempt" className="fw6 pa3 bg-white">
                  Attempt
                </th>
                <th id="lift" className="fw6 pa3 bg-white">
                  {lift}
                </th>
              </tr>
            </thead>
            <tbody className="lh-copy">
              {inCompetitionAthletes
                .sort((a, b) => {
                  if (a[lift] === b[lift]) {
                    return a.attempt - b.attempt;
                  } else {
                    return a[lift] - b[lift];
                  }
                })
                .map((athlete, i) => {
                  if (athlete.attempt < 3) {
                    return (
                      <Athlete
                        key={i}
                        name={athlete.name}
                        attempt={athlete.attempt}
                        snatch={athlete.snatch}
                        cnj={athlete.cnj}
                        lift={lift}
                        coachName={athlete.coachname}
                        registeredName={name}
                      />
                    );
                  }
                })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
};

export default AthleteList;
