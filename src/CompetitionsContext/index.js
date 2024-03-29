import React, { useState, useContext, createContext } from 'react';

const CompsContext = createContext();

const CompsProvider = ({ children }) => {
  const [competitions, setCompetitions] = useState([
    {
      id: '0',
      authorId: 73,
      name: 'Comp1',
      location: 'Eesti',
      status: 'not_started',
      attemptTime: Date.now() + 61000,
      timer: true,
      lift: 'snatch',
      verdict: [null, null, null],
      officials: [
        {
          id: 22,
          name: 'Judge1',
          role: 'judge',
          spot: 0,
        },
        {
          id: 72,
          name: 'Coach1',
          role: 'coach',
        },
      ],
      registrations: [
        {
          id: 110,
          name: 'Judge2',
          role: 'judge',
        },
        {
          id: 232,
          name: 'Coach2',
          role: 'coach',
        },
      ],
      athletes: [
        {
          id: 1,
          name: 'Athlete1',
          attempt: 0,
          weight: '-',
          age: 22,
          snatch: 23,
          cnj: 40,
          coachid: 72,
          coachname: 'Külli',
          result: {
            snatch: [null, null, null],
            cnj: [null, null, null],
          },
        },
        {
          id: 2,
          name: 'Athlete2',
          attempt: 0,
          weight: '-',
          age: 22,
          snatch: 30,
          cnj: 41,
          coachid: 222,
          coachname: 'Coach1',
          result: {
            snatch: [null, null, null],
            cnj: [null, null, null],
          },
        },
        {
          id: 3,
          name: 'Athlete3',
          attempt: 0,
          weight: '-',
          age: 22,
          snatch: 30,
          cnj: 42,
          coachid: 72,
          coachname: 'Külli',
          result: {
            snatch: [null, null, null],
            cnj: [null, null, null],
          },
        },
      ],
    },
    {
      id: '1',
      authorId: 13,
      name: 'Comp2',
      location: 'Eesti',
      status: 'not_started',
      attemptTime: Date.now() + 61000,
      timer: true,
      lift: 'snatch',
      verdict: [null, null, null],
      officials: [
        {
          id: 17,
          name: 'Judge2',
          role: 'judge',
        },
        {
          id: 14,
          name: 'Coach2',
          role: 'coach',
        },
      ],
      registrations: [
        {
          name: 'Judge3',
          role: 'judge',
        },
        {
          name: 'Coach3',
          role: 'coach',
        },
      ],
      athletes: [
        {
          name: 'Athletex1',
          attempt: 0,
          weight: '-',
          age: 22,
          snatch: 30,
          cnj: 40,
          coachid: 27,
          coachname: 'Coach2',
          result: {
            snatch: [null, null, null],
            cnj: [null, null, null],
          },
        },
        {
          name: 'Athletex2',
          attempt: 0,
          weight: '-',
          age: 22,
          snatch: 30,
          cnj: 40,
          coachid: 21,
          coachname: 'Coach2',
          result: {
            snatch: [null, null, null],
            cnj: [null, null, null],
          },
        },
        {
          name: 'Athletex3',
          attempt: 0,
          weight: '-',
          age: 22,
          snatch: 30,
          cnj: 40,
          coachid: 29,
          coachname: 'Coach2',
          result: {
            snatch: [null, null, null],
            cnj: [null, null, null],
          },
        },
      ],
    },
    {
      id: '4',
      authorId: 13,
      name: 'Comp4',
      location: 'Eesti',
      status: 'not_started',
      attemptTime: Date.now() + 61000,
      timer: true,
      lift: 'snatch',
      verdict: [null, null, null],
      officials: [
        {
          id: 12,
          name: 'Judge3',
          role: 'judge',
        },
        {
          id: 17,
          name: 'Coach3',
          role: 'coach',
        },
      ],
      registrations: [
        {
          name: 'Judge4',
          role: 'judge',
        },
        {
          name: 'Coach4',
          role: 'coach',
        },
      ],
      athletes: [
        {
          name: 'Athletez1',
          attempt: 0,
          weight: '-',
          age: 22,
          snatch: 30,
          cnj: 40,
          coachid: 90,
          coachname: 'Coach3',
          result: {
            snatch: [null, null, null],
            cnj: [null, null, null],
          },
        },
        {
          name: 'Athletez2',
          attempt: 0,
          weight: '-',
          age: 22,
          snatch: 30,
          cnj: 40,
          coachid: 26,
          coachname: 'Coach3',
          result: {
            snatch: [null, null, null],
            cnj: [null, null, null],
          },
        },
        {
          name: 'Athletez3',
          attempt: 0,
          weight: '-',
          age: 22,
          snatch: 30,
          cnj: 40,
          coachid: 23,
          coachname: 'Coach3',
          result: {
            snatch: [null, null, null],
            cnj: [null, null, null],
          },
        },
      ],
    },
    {
      id: '2',
      authorId: 13,
      name: 'Comp3',
      location: 'Eesti',
      status: 'not_started',
      attemptTime: Date.now() + 61000,
      timer: true,
      lift: 'snatch',
      verdict: [null, null, null],
      officials: [
        {
          id: 12,
          name: 'Judge3',
          role: 'judge',
        },
        {
          id: 14,
          name: 'Coach3',
          role: 'coach',
        },
      ],
      registrations: [
        {
          name: 'Judge4',
          role: 'judge',
        },
        {
          name: 'Coach4',
          role: 'coach',
        },
      ],
      athletes: [
        {
          name: 'Athletez1',
          attempt: 0,
          weight: '-',
          age: 22,
          snatch: 30,
          cnj: 40,
          coachid: 90,
          coachname: 'Coach3',
          result: {
            snatch: [null, null, null],
            cnj: [null, null, null],
          },
        },
        {
          name: 'Athletez2',
          attempt: 0,
          weight: '-',
          age: 22,
          snatch: 30,
          cnj: 40,
          coachid: 26,
          coachname: 'Coach3',
          result: {
            snatch: [null, null, null],
            cnj: [null, null, null],
          },
        },
        {
          name: 'Athletez3',
          attempt: 0,
          weight: '-',
          age: 22,
          snatch: 30,
          cnj: 40,
          coachid: 23,
          coachname: 'Coach3',
          result: {
            snatch: [null, null, null],
            cnj: [null, null, null],
          },
        },
      ],
    },
  ]);

  const updateTable = (compId, athleteName, prop, value) => {
    const updatedAthletes = competitions.map(competition =>
      competition.id === compId
        ? {
            ...competition,
            athletes: competition.athletes.map(ath => (ath.name === athleteName ? { ...ath, [prop]: value } : ath)),
          }
        : competition,
    );
    setCompetitions(updatedAthletes);
  };

  const getCompetition = id => {
    const comp = competitions.find(competition => competition.id === id);
    return comp;
  };

  const getMyCompetitions = userId => {
    const comps = competitions
      .filter(competition => userId === competition.authorId)
      .concat(
        competitions.filter(
          competition =>
            competition.officials.find(official => official.id === userId) ||
            competition.registrations.find(reg => reg.id === userId),
        ),
      );
    return comps;
  };

  const getActiveCompetitions = userId => {
    const comps = competitions.filter(
      competition =>
        userId !== competition.authorId &&
        !competition.officials.some(official => official.id === userId) &&
        competition.status === 'not_started',
    );
    return comps;
  };

  const createCompetition = competition => {
    const { id, authorid, name, location } = competition;
    const comps = competitions;
    comps.push({
      id,
      authorId: authorid,
      name,
      status: 'not_started',
      time: 60,
      timer: false,
      lift: 'snatch',
      verdict: [null, null, null],
      location,
      officials: [],
      registrations: [],
      athletes: [],
    });
    setCompetitions(comps);
  };

  const setNilAttempt = id => {
    setCompetitions(pS =>
      pS.map(comp =>
        comp.id === id ? { ...comp, athletes: comp.athletes.map(ath => ({ ...ath, attempt: 0 })) } : comp,
      ),
    );
  };

  const addAthlete = data => {
    const { id, compid, name, age, snatch, cnj, coachname, coachid } = data;
    const index = competitions.findIndex(comp => comp.id === compid);
    if (age < 1 || age > 99 || snatch < 10 || snatch > 230 || cnj < 10 || cnj > 300) {
      alert('Please enter valid info!');
      return;
    }
    competitions[index].athletes.push({
      id,
      name,
      attempt: 0,
      weight: '',
      age,
      snatch,
      cnj,
      coachid: Number(coachid),
      coachname,
      result: { snatch: [null, null, null], cnj: [null, null, null] },
    });
  };

  const setLiftResult = (compId, athlete, weight, attempt, lift) => {
    const competition = competitions.find(comp => compId === comp.id);
    const { verdict } = competition;
    const noOfVotes = verdict.filter(vote => vote !== null);
    const correctAthlete = competition.athletes.find(ath => ath.name === athlete);
    const result = verdict.reduce((a, b) => a + b);
    if (result > 1 && noOfVotes.length === 3 && correctAthlete.attempt < 3) {
      correctAthlete[lift] = weight + 1;
      correctAthlete.attempt = attempt + 1;
      correctAthlete.result[lift].splice(attempt, 1, weight);
      setCompetitions(pS =>
        pS.map(comp =>
          compId === comp.id
            ? {
                ...comp,
                athletes: comp.athletes.map(ath => (ath.name === athlete ? correctAthlete : ath)),
              }
            : comp,
        ),
      );
    } else if (result < 2 && noOfVotes.length === 3 && correctAthlete.attempt < 3) {
      correctAthlete.attempt = attempt + 1;
      correctAthlete.result[lift].splice(attempt, 1, -weight);
      setCompetitions(pS =>
        pS.map(comp =>
          compId === comp.id
            ? {
                ...comp,
                athletes: comp.athletes.map(ath => (ath.name === athlete ? correctAthlete : ath)),
              }
            : comp,
        ),
      );
    }
  };

  const changeWeight = (compId, athlete, weight, lift) => {
    setCompetitions(pS =>
      pS.map(comp =>
        compId === comp.id
          ? {
              ...comp,
              athletes: comp.athletes.map(ath => (ath.name === athlete.name ? { ...ath, [lift]: weight } : ath)),
            }
          : comp,
      ),
    );
  };

  const joinComp = (compId, userId, name, role) => {
    const correctCompetition = competitions.find(comp => comp.id === compId);
    const judgeArray = correctCompetition.officials.filter(official => official.role === 'judge');
    if (role === 'judge' && judgeArray.length === 3) {
      alert('There are 3 judges registered for this competition!');
    }
    correctCompetition.registrations.push({ id: userId, name, role });
    setCompetitions(pS =>
      pS.map(comp => (comp.id === compId ? { ...comp, registrations: correctCompetition.registrations } : comp)),
    );
  };

  const deleteRow = (compId, group, rowId) => {
    const competition = competitions.find(comp => compId === comp.id);
    competition[group].splice(
      competition[group].findIndex(el => el.id === rowId),
      1,
    );
    setCompetitions(pS => pS.map(comp => (comp.id === compId ? { ...comp, [group]: competition[group] } : comp)));
  };

  const approveRow = (compId, group, row) => {
    const competition = competitions.find(comp => compId === comp.id);
    const judgeArray = competition.officials.filter(official => official.role === 'judge');
    if (row.role === 'judge' && judgeArray.length === 3) {
      alert('There are 3 judges registered for this competition!');
    } else if (row.role === 'judge') {
      row.spot = judgeArray.length;
    }
    competition[group].splice(
      competition[group].findIndex(el => el.id === row.id),
      1,
    );
    competition.officials.push(row);
    setCompetitions(pS =>
      pS.map(comp =>
        comp.id === compId ? { ...comp, officials: competition.officials, [group]: competition[group] } : comp,
      ),
    );
  };

  const setStatus = (compid, status) => {
    setCompetitions(pS => pS.map(comp => (comp.id === compid ? { ...comp, status: status } : comp)));
  };

  const setTimer = compId => {
    setCompetitions(pS => pS.map(comp => (comp.id === compId ? { ...comp, timer: !comp.timer } : comp)));
  };

  const setLift = (compId, lift) => {
    setCompetitions(pS => pS.map(comp => (comp.id === compId ? { ...comp, lift: lift } : comp)));
  };

  const setVerdict = (compId, decision, spot) => {
    const competition = competitions.find(comp => comp.id === compId);

    if (spot !== null) {
      competition.verdict.splice(spot, 1, decision);
    } else {
      competition.verdict = decision;
    }

    setCompetitions(pS => pS.map(comp => (compId === comp.id ? { ...comp, verdict: competition.verdict } : comp)));
  };

  const setAttemptTime = (compId, time) => {
    setCompetitions(pS => pS.map(comp => (compId === comp.id ? { ...comp, attemptTime: Date.now() + time } : comp)));
  };

  const contextValue = {
    getCompetition,
    getMyCompetitions,
    getActiveCompetitions,
    createCompetition,
    addAthlete,
    setNilAttempt,
    setLiftResult,
    changeWeight,
    joinComp,
    updateTable,
    deleteRow,
    approveRow,
    setStatus,
    setTimer,
    setLift,
    setVerdict,
    setAttemptTime,
  };

  return <CompsContext.Provider value={contextValue}>{children}</CompsContext.Provider>;
};

const useCompsContext = () => {
  const context = useContext(CompsContext);
  if (context === undefined) {
    throw new Error('This function can only be used within CompsProvider');
  }
  return context;
};

export { CompsProvider, useCompsContext };
