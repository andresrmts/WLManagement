import React, { useState, useContext, createContext } from 'react';

const CompsContext = createContext();

const CompsProvider = ({ children }) => {
  const [competitions, setCompetitions] = useState([
    {
      id: '0',
      authorId: 73,
      name: 'Comp1',
      location: 'Eesti',
      officials: [
        {
          id: 22,
          name: 'Judge1',
          role: 'judge',
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
          name: 'Athlete1',
          attempt: 0,
          weight: '-',
          age: 22,
          snatch: 22,
          cnj: 40,
          coachid: 73,
          coachname: 'Külli',
          result: {
            snatch: [],
            cnj: [],
          },
        },
        {
          name: 'Athlete2',
          attempt: 0,
          weight: '-',
          age: 22,
          snatch: 30,
          cnj: 40,
          coachid: 222,
          coachname: 'Coach1',
          result: {
            snatch: [],
            cnj: [],
          },
        },
        {
          name: 'Athlete3',
          attempt: 0,
          weight: '-',
          age: 22,
          snatch: 30,
          cnj: 40,
          coachid: 73,
          coachname: 'Külli',
          result: {
            snatch: [],
            cnj: [],
          },
        },
      ],
    },
    {
      id: '1',
      authorId: 13,
      name: 'Comp2',
      location: 'Eesti',
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
            snatch: [],
            cnj: [],
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
            snatch: [],
            cnj: [],
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
            snatch: [],
            cnj: [],
          },
        },
      ],
    },
    {
      id: '2',
      authorId: 13,
      name: 'Comp3',
      location: 'Eesti',
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
            snatch: [],
            cnj: [],
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
            snatch: [],
            cnj: [],
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
            snatch: [],
            cnj: [],
          },
        },
      ],
    },
  ]);

  const getCompetition = id => {
    const comp = competitions.find(competition => competition.id === id);
    return comp;
  };

  const getMyCompetitions = userId => {
    const comps = competitions
      .filter(competition => userId === competition.authorId)
      .concat(competitions.filter(competition => competition.officials.find(official => official.id === userId)));
    return comps;
  };

  const getActiveCompetitions = userId => {
    const comps = competitions.filter(
      competition => userId !== competition.authorId && !competition.officials.some(official => official.id === userId),
    );
    return comps;
  };

  const createCompetition = competition => {
    const { id, authorId, compName, location, date } = competition;
    competitions.push({
      id,
      authorId,
      compName,
      location,
      date,
      officials: [],
      registrations: [],
      athletes: [],
    });
  };

  const editWeight = (id, athleteName) => {
    const weight = prompt('Enter athlete weight');
    setCompetitions(pS =>
      pS.map(
        comp =>
          (comp.id = id
            ? { ...comp, athletes: comp.athletes.map(ath => (athleteName === ath.name ? { ...ath, weight } : ath)) }
            : comp),
      ),
    );
  };

  const setNilAttempt = id => {
    setCompetitions(pS =>
      pS.map(comp =>
        comp.id === id ? { ...comp, athletes: comp.athletes.map(ath => ({ ...ath, attempt: 0 })) } : comp,
      ),
    );
  };

  const addAthlete = data => {
    const { compId, name, age, snatch, cnj, coachname, coachid } = data;
    const index = competitions.findIndex(comp => comp.id === compId);
    if (age < 1 || age > 99 || snatch < 10 || snatch > 230 || cnj < 10 || cnj > 300) {
      alert('Please enter valid info!');
      return;
    }
    competitions[index].athletes.push({
      name,
      attempt: 0,
      weight: '',
      age,
      snatch,
      cnj,
      coachid,
      coachname,
      result: { snatch: [], cnj: [] },
    });
  };

  const setLiftResult = (compId, verdict, athlete, weight, attempt, lift) => {
    const competition = competitions.find(comp => compId === comp.id);
    const correctAthlete = competition.athletes.find(ath => ath.name === athlete);
    if (verdict.result > 0 && verdict.votes === 3 && correctAthlete.attempt < 3) {
      correctAthlete.result[lift].push(weight);
      setCompetitions(pS =>
        pS.map(comp =>
          compId === comp.id
            ? {
                ...comp,
                athletes: comp.athletes.map(ath =>
                  ath.name === athlete ? { ...ath, [lift]: weight + 1, attempt: attempt + 1 } : ath,
                ),
              }
            : comp,
        ),
      );
    } else if (verdict.result < 0 && verdict.votes === 3 && correctAthlete.attempt < 3) {
      correctAthlete.result[lift].push(weight + 'x');
      setCompetitions(pS =>
        pS.map(comp =>
          compId === comp.id
            ? {
                ...comp,
                athletes: comp.athletes.map(ath => (ath.name === athlete ? { ...ath, attempt: attempt + 1 } : ath)),
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
    correctCompetition.registrations.push({ id: userId, name, role });
  };

  const approveRemove = (compId, name, decision, role) => {
    const competition = competitions.find(comp => compId === comp.id);
    let splicedArray;
    if (decision === 'Yes' && role === 'judge') {
      if (competition.officials.filter(official => official.role === 'judge').length < 3) {
        splicedArray = competition.registrations.splice(
          competition.registrations.findIndex(participant => participant.name === name),
          1,
        );
        competition.officials.push(splicedArray[0]);
        setCompetitions(pS =>
          pS.map(comp => (comp.id === compId ? { ...comp, registrations: competition.registrations } : comp)),
        );
        return;
      }
      alert('There already are 3 judges in the competition');
      return;
    } else if (decision === 'Yes') {
      splicedArray = competition.registrations.splice(
        competition.registrations.findIndex(participant => participant.name === name),
        1,
      );
      competition.officials.push(splicedArray[0]);
      setCompetitions(pS =>
        pS.map(comp => (comp.id === compId ? { ...comp, registrations: competition.registrations } : comp)),
      );
      return;
    }
    competition.registrations.splice(
      competition.registrations.findIndex(participant => participant.name === name),
      1,
    );
    setCompetitions(pS =>
      pS.map(comp => (comp.id === compId ? { ...comp, registrations: competition.registrations } : comp)),
    );
  };

  const contextValue = {
    getCompetition,
    getMyCompetitions,
    getActiveCompetitions,
    createCompetition,
    editWeight,
    addAthlete,
    setNilAttempt,
    setLiftResult,
    changeWeight,
    joinComp,
    approveRemove,
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