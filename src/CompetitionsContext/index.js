import React, { useState, useContext, createContext } from 'react';

const CompsContext = createContext();

const CompsProvider = ({ children }) => {
  const [competitions, setCompetitions] = useState([
    {
      id: '0',
      authorId: 12,
      name: 'Comp1',
      location: 'Eesti',
      officials: [
        {
          id: 22,
          name: 'Judge1',
          role: 'judge',
        },
        {
          id: 73,
          name: 'Coach1',
          role: 'coach',
        },
      ],
      registrations: [
        {
          name: 'Judge2',
          role: 'judge',
        },
        {
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
          snatch: 30,
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

  const createCompetition = (id, authorId, compName, location, date) => {
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

  const contextValue = { getCompetition, getMyCompetitions, getActiveCompetitions, createCompetition, editWeight };

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
