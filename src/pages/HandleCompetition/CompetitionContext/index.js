import React, { useState, useContext, createContext } from 'react';

const CompetitionContext = createContext();

const CompetitionProvider = ({ children, userName }) => {
  const [status, setStatus] = useState('notstarted');
  const [comproute, setCompRoute] = useState('home');
  const [timer, setTimer] = useState(true);
  const [time, setTime] = useState({ minutes: 1, seconds: 0 + '0' });
  const [lift, setLift] = useState('snatch');
  const [acceptedRegistrations, setAcceptedRegistrations] = useState([
    {
      name: 'Külli',
      role: 'judge',
    },
    {
      name: 'Andres Riimets',
      role: 'coach',
    },
  ]);
  const [registrations, setRegistrations] = useState([
    {
      name: 'Andres Riimets',
      role: 'coach',
    },
    {
      name: 'Piibe Pullerits',
      role: 'changetable',
    },
    {
      name: 'Priit',
      role: 'judge',
    },
  ]);
  const [registeredAthletes, setRegisteredAthletes] = useState([
    {
      name: 'Athlete1',
      attempt: 0,
      weight: '-',
      age: 27,
      snatch: 30,
      cnj: 23,
      coachname: 'Coach',
      result: {
        snatch: [],
        cnj: [],
      },
    },
    {
      name: 'Athlete2',
      attempt: 0,
      weight: '-',
      age: 27,
      snatch: 26,
      cnj: 23,
      coachname: 'Andres Riimets',
      result: {
        snatch: [],
        cnj: [],
      },
    },
    {
      name: 'Athlete3',
      attempt: 0,
      weight: '-',
      age: 27,
      snatch: 30,
      cnj: 40,
      coachname: 'Andres Riimets',
      result: {
        snatch: [],
        cnj: [],
      },
    },
  ]);
  const [verdict, setVerdict] = useState({
    result: 0,
    votes: 0,
  });

  const editAthleteWeight = athleteName => {
    const weight = prompt('Enter athlete weight:');
    setRegisteredAthletes(pS => pS.map(ath => (athleteName === ath.name ? { ...ath, weight } : ath)));
  };

  const changeCompRoute = route => {
    setCompRoute(route);
  };

  const changeTime = (minutes, seconds) => {
    setTime({ minutes, seconds });
  };

  const nextLift = () => {
    setLift('cnj');
    setRegisteredAthletes(pS => pS.map(ath => Object.assign(ath, { attempt: 0 })));
    setTime({ minutes: 1, seconds: 0 + '0' });
    setTimer(false);
  };

  const toggleTimer = () => {
    setTimer(pS => !pS);
  };

  const addAthlete = (name, age, snatch, cnj) => {
    if (age < 1 || age > 99 || snatch < 10 || snatch > 230 || cnj < 10 || cnj > 300) {
      alert('Please enter valid info!');
      return;
    }
    registeredAthletes.push({
      name,
      attempt: 0,
      weight: '',
      age,
      snatch,
      cnj,
      coachname: userName,
      result: { snatch: [], cnj: [] },
    });
    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
    document.getElementById('snatch').value = '';
    document.getElementById('cnj').value = '';
  };

  const goToNextAttempt = (athlete, weight, attempt) => {
    const index = registeredAthletes.findIndex(reg => reg.name === athlete);
    if (verdict.result > 0 && verdict.votes === 3 && registeredAthletes[index].attempt < 3) {
      registeredAthletes[index].result[lift].push(weight);
      setRegisteredAthletes(pS =>
        pS.map(ath => (ath.name === athlete ? Object.assign(ath, { [lift]: weight++, attempt: attempt++ }) : ath)),
      );
      setVerdict({ result: 0, votes: 0 });
    } else if (verdict.result < 0 && verdict.votes === 3 && registeredAthletes[index].attempt < 3) {
      registeredAthletes[index].result[lift].push(weight + 'x');
      setRegisteredAthletes(pS =>
        pS.map(ath => (ath.name === athlete ? Object.assign(ath, { attempt: attempt++ }) : ath)),
      );
      setVerdict({ result: 0, votes: 0 });
    }
  };

  const castVote = decision => {
    if (decision === 'yes') {
      setVerdict({ result: 1, votes: 3 });
      return;
    }
    setVerdict({ result: -1, votes: 3 });
  };

  const joinComp = (name, role) => {
    registrations.push({ name: name, role: role });
  };

  const changeWeight = (athlete, weight) => {
    setRegisteredAthletes(pS =>
      pS.map(ath => (ath.name === athlete.name ? Object.assign(ath, { [lift]: weight }) : ath)),
    );
  };

  const approveRemove = (decision, name, role) => {
    let splicedArray;
    if (decision === 'yes' && role === 'judge') {
      if (acceptedRegistrations.filter(judge => judge.role === 'judge').length < 3) {
        splicedArray = registrations.splice(
          registrations.findIndex(participant => participant.name === name),
          1,
        );
        acceptedRegistrations.push(splicedArray[0]);
        setRegistrations(registrations);
        return;
      }
      alert('There already are 3 judges in the competition');
      return;
    } else if (decision === 'yes') {
      splicedArray = registrations.splice(
        registrations.findIndex(participant => participant.name === name),
        1,
      );
      acceptedRegistrations.push(splicedArray[0]);
      setRegistrations(registrations);
      return;
    }
    registrations.splice(
      registrations.findIndex(participant => participant.name === name),
      1,
    );
    setRegistrations(registrations);
  };

  const contextValue = {
    status,
    setstatus: setStatus,
    comproute,
    changeCompRoute,
    timer,
    time,
    setTimer,
    setTime,
    lift,
    nextLift,
    changeTime,
    toggleTimer,
    editAthleteWeight,
    acceptedRegistrations,
    addAthlete,
    goToNextAttempt,
    castVote,
    joinComp,
    changeWeight,
    approveRemove,
    registeredAthletes,
    registrations,
    verdict,
  };

  return <CompetitionContext.Provider value={contextValue}>{children}</CompetitionContext.Provider>;
};

const useCompetitionContext = () => {
  const context = useContext(CompetitionContext);
  if (context === undefined) {
    throw new Error('This function can only be used within CompetitionProvider');
  }
  return context;
};

export { CompetitionProvider, useCompetitionContext };
