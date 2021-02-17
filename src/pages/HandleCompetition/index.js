import React, { useState, useEffect } from 'react';
import AdminNav from './components/AdminNav';
import Registrations from './components/Registrations';
import CoachNav from './components/CoachNav';
import MyAthletes from './components/MyAthletes';
import RegisteredOfficials from './components/RegisteredOfficials';
import AthleteRegistration from './components/AthleteRegistration';
import Judge from './components/Judge';
import Result from './components/Result';
import RoleSelection from './components/RoleSelection';
import CoachInCompetition from './components/CoachInCompetition';
import CompetitionAdmin from './components/CompetitionAdmin';
import Table from '../../components/Table';
import { useCompetitionContext } from './CompetitionContext';
import { Link, Switch, Route, useRouteMatch, useParams } from 'react-router-dom';
import { useAuthContext } from '../../AuthContext';
import { useCompsContext } from '../../CompetitionsContext';

const HandleCompetition = () => {
  const [status, setStatus] = useState('started');
  const [time, setTime] = useState({ minutes: 1, seconds: 0 + '0' });
  const [timer, setTimer] = useState(true);
  const [lift, setLift] = useState('snatch');
  const { userName, userId, role, setRole } = useAuthContext();
  const { getCompetition, editWeight, addAthlete, setNilAttempt } = useCompsContext();
  const { compId } = useParams();
  const competition = getCompetition(compId);
  const match = useRouteMatch();

  const isAdmin = userId === competition.authorId;
  const filteredUser = competition.officials.filter(reg => reg.id === userId);

  const changeTime = (minutes, seconds) => {
    setTime({ minutes, seconds });
  };

  const toggleTimer = () => {
    setTimer(pS => !pS);
  };

  const nextLift = () => {
    setLift('cnj');
    setNilAttempt(compId);
    setTime({ minutes: 1, seconds: 0 + '0' });
    setTimer(false);
  };

  useEffect(() => {
    if (isAdmin) {
      setRole('admin');
      return;
    }
    if (filteredUser[0]) {
      setRole(filteredUser[0].role);
      return;
    }
  });

  const headers = [
    {
      header: 'Name',
      styles: 'fw6 pa3 bg-white',
    },
    {
      header: 'Age',
      styles: 'fw6 pa3 bg-white',
    },
    {
      header: 'Weight',
      styles: 'fw6 pa3 bg-white',
    },
    {
      header: 'Snatch',
      styles: 'fw6 pa3 bg-white',
    },
    {
      header: 'CNJ',
      styles: 'fw6 pa3 bg-white',
    },
    {
      header: 'Coachname',
      styles: 'fw6 pa3 bg-white',
    },
  ];

  const props = {
    name: '',
    age: '',
    weight: '',
    snatch: '',
    cnj: '',
    coachname: '',
  };

  const outSideProps = { functions: { weight: editWeight } };

  const renderNav = role => {
    switch (role) {
      case 'admin':
        return <AdminNav status={status} setStatus={setStatus} />;
      case 'coach':
        return <CoachNav status={status} />;
      case 'judge':
        if (status === 'started') {
          return <Result />;
        }
        return (
          <Link to="/competitionselection" onClick={() => setRole('')} className="f6 tc underline pointer center">
            Exit
          </Link>
        );
      default:
        return (
          <Link to="/competitionselection" className="f6 tc underline pointer center">
            Exit
          </Link>
        );
    }
  };

  return (
    <div>
      {renderNav(role)}
      <Switch>
        {isAdmin && status === 'notstarted' && (
          <div>
            <Route exact path={match.path}>
              <Registrations registrations={competition.registrations} />
            </Route>
            <Route path={`${match.path}/registeredofficials`}>
              <RegisteredOfficials officials={competition.officials} />
            </Route>
            <Route path={`${match.path}/athletelist`}>
              <Table props={props} headers={headers} tableContent={competition.athletes} outSideProps={outSideProps} />
            </Route>
          </div>
        )}
        {role === 'coach' && status === 'notstarted' && (
          <div>
            <Route exact path={match.path}>
              <MyAthletes athletes={competition.athletes} onWeightUpdate={editWeight} />
            </Route>
            <Route path={`${match.path}/athleteregistration`}>
              <AthleteRegistration onAdd={addAthlete} />
            </Route>
          </div>
        )}
        {role === 'judge' && (
          <Route path={match.path}>
            <Judge timer={timer} time={time} changeTime={changeTime} status={status} lift={lift} />
          </Route>
        )}
        {isAdmin && (
          <Route path={match.path}>
            <CompetitionAdmin
              nextLift={nextLift}
              lift={lift}
              toggleTimer={toggleTimer}
              time={time}
              timer={timer}
              changeTime={changeTime}
              athletes={competition.athletes}
            />
          </Route>
        )}
        {role === 'coach' && (
          <Route path={match.path}>
            <CoachInCompetition
              timer={timer}
              changeTime={changeTime}
              lift={lift}
              toggleTimer={toggleTimer}
              time={time}
              athletes={competition.athletes}
            />
          </Route>
        )}
        {competition.registrations.find(reg => reg.name === userName) !== undefined && (
          <Route path={match.path}>
            <h1>Your application hasn't been accepted yet!</h1>
          </Route>
        )}
        {status === 'notstarted' && (
          <Route path={match.path}>
            <RoleSelection />
          </Route>
        )}
      </Switch>
    </div>
  );
};

export default HandleCompetition;
