import React, { useState, useContext, createContext } from 'react';

const CompsContext = createContext();

const CompsProvider = ({ children }) => {
  const [competitions] = useState([
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
          coachname: 'Coach1',
        },
        {
          name: 'Athlete2',
          attempt: 0,
          weight: '-',
          age: 22,
          snatch: 30,
          cnj: 40,
          coachname: 'Coach1',
        },
        {
          name: 'Athlete3',
          attempt: 0,
          weight: '-',
          age: 22,
          snatch: 30,
          cnj: 40,
          coachname: 'Coach1',
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
          coachname: 'Coach2',
        },
        {
          name: 'Athletex2',
          attempt: 0,
          weight: '-',
          age: 22,
          snatch: 30,
          cnj: 40,
          coachname: 'Coach2',
        },
        {
          name: 'Athletex3',
          attempt: 0,
          weight: '-',
          age: 22,
          snatch: 30,
          cnj: 40,
          coachname: 'Coach2',
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
          coachname: 'Coach3',
        },
        {
          name: 'Athletez2',
          attempt: 0,
          weight: '-',
          age: 22,
          snatch: 30,
          cnj: 40,
          coachname: 'Coach3',
        },
        {
          name: 'Athletez3',
          attempt: 0,
          weight: '-',
          age: 22,
          snatch: 30,
          cnj: 40,
          coachname: 'Coach3',
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

  const contextValue = { getCompetition, getMyCompetitions, getActiveCompetitions };

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
