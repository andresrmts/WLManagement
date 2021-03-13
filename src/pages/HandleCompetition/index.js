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
import { Link, Switch, Route, useRouteMatch, useParams } from 'react-router-dom';
import { useAuthContext } from '../../AuthContext';
import { useCompsContext } from '../../CompetitionsContext';
import DeleteButton from '../../components/DeleteButton';

const HandleCompetition = () => {
  const [status, setStatus] = useState('notstarted');
  const [time, setTime] = useState({ minutes: 1, seconds: 0 });
  const [timer, setTimer] = useState(true);
  const [lift, setLift] = useState('snatch');
  const [verdict, setVerdict] = useState({
    result: 0,
    votes: 0,
  });
  const { userName, userId, role, setRole } = useAuthContext();
  const {
    getCompetition,
    addAthlete,
    setNilAttempt,
    setLiftResult,
    updateTable,
    deleteRow,
    approveRow,
  } = useCompsContext();
  const { compId } = useParams();
  const competition = getCompetition(compId);
  const match = useRouteMatch();

  const isAdmin = userId === competition.authorId;
  const filteredUser = competition.officials.filter(reg => reg.id === userId);

  const showState = () => {
    console.log(competition);
  };

  const changeTime = (minutes, seconds) => {
    setTime({ minutes, seconds });
  };

  const toggleTimer = () => {
    setTimer(pS => !pS);
  };

  const nextLift = () => {
    setLift('cnj');
    setNilAttempt(compId);
    setTime({ minutes: 1, seconds: 0 });
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

  const castVote = decision => {
    if (decision === 'yes') {
      setVerdict({ result: 1, votes: 3 });
      return;
    }
    setVerdict({ result: -1, votes: 3 });
  };

  const goToNextAttempt = (athlete, weight, attempt) => {
    setLiftResult(compId, verdict, athlete, weight, attempt, lift);
    setVerdict({ result: 0, votes: 0 });
  };

  const columns = [
    {
      name: 'id',
      hidden: true,
    },
    {
      name: 'name',
      columnName: 'Athlete Name',
    },
    {
      name: 'age',
      columnName: 'Age',
    },
    {
      name: 'weight',
      columnName: 'Weight',
      editable: true,
    },
    {
      name: 'snatch',
      columnName: 'Snatch',
      editable: true,
    },
    {
      name: 'cnj',
      columnName: 'Clean & Jerk',
      editable: true,
    },
    {
      name: 'coachname',
      columnName: 'Coach',
    },
    {
      template: DeleteButton,
      templateParams: { group: 'athletes', onDelete: deleteRow },
    },
  ];

  const renderNav = role => {
    switch (role) {
      case 'admin':
        return <AdminNav showState={showState} toggleTimer={toggleTimer} status={status} setStatus={setStatus} />;
      case 'coach':
        return <CoachNav status={status} />;
      case 'judge':
        if (status !== 'notstarted') {
          return <Result verdict={verdict} />;
        }
        return (
          <Link to="/competitions" onClick={() => setRole('')} className="f6 tc underline pointer center">
            Exit
          </Link>
        );
      default:
        return (
          <Link to="/competitions" className="f6 tc underline pointer center">
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
              <Registrations registrations={competition.registrations} onDelete={deleteRow} onApprove={approveRow} />
            </Route>
            <Route path={`${match.path}/registeredofficials`}>
              <RegisteredOfficials officials={competition.officials} />
            </Route>
            <Route path={`${match.path}/athletelist`}>
              <Table columns={columns} tableContent={competition.athletes} updateTable={updateTable} />
            </Route>
          </div>
        )}
        {role === 'coach' && status === 'notstarted' && (
          <div>
            <Route exact path={match.path}>
              <MyAthletes athletes={competition.athletes} updateTable={updateTable} onDelete={deleteRow} />
            </Route>
            <Route path={`${match.path}/athleteregistration`}>
              <AthleteRegistration onAdd={addAthlete} />
            </Route>
          </div>
        )}
        {role === 'judge' && (
          <Route path={match.path}>
            <Judge
              athletes={competition.athletes}
              goToNextAttempt={goToNextAttempt}
              castVote={castVote}
              timer={timer}
              time={time}
              changeTime={changeTime}
              status={status}
              lift={lift}
            />
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
