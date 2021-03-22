import React, { useEffect } from 'react';
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
  const { userName, userId, role, setRole } = useAuthContext();
  const {
    getCompetition,
    addAthlete,
    setNilAttempt,
    setLiftResult,
    updateTable,
    deleteRow,
    approveRow,
    setStatus,
    setTimer,
    setLift,
    setVerdict,
    setAttemptTime,
  } = useCompsContext();
  const { compId } = useParams();
  const competition = getCompetition(compId);
  const { status, lift, authorId, verdict, registrations, officials, athletes, timer, attemptTime } = competition;
  const match = useRouteMatch();

  const isAdmin = userId === authorId;
  const filteredUser = officials.filter(reg => reg.id === userId);

  const nextLift = () => {
    setLift(compId, 'cnj');
    setNilAttempt(compId);
    setTimer(compId, false);
    setAttemptTime(compId, Date.now() + 60000);
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
    setVerdict(compId, decision, filteredUser[0].spot);
    return;
  };

  const goToNextAttempt = (athlete, weight, attempt) => {
    setLiftResult(compId, athlete, weight, attempt, lift);
    setVerdict(compId, [null, null, null], null);
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
        return <AdminNav toggleTimer={setTimer} status={status} setStatus={setStatus} />;
      case 'coach':
        return <CoachNav status={status} />;
      case 'judge':
        if (status !== 'not_started') {
          return <Result verdict={verdict} />;
        }
        return (
          <Link to="/competitions" onClick={() => setRole('')} className="f6 tc underline pointer center">
            Exit
          </Link>
        );
      default:
        return (
          <Link to="/competitions" onClick={() => setRole('')} className="f6 tc underline pointer center">
            Exit
          </Link>
        );
    }
  };

  return (
    <div>
      {renderNav(role)}
      <Switch>
        {isAdmin && status === 'not_started' && (
          <div>
            <Route exact path={match.path}>
              <Registrations registrations={registrations} onDelete={deleteRow} onApprove={approveRow} />
            </Route>
            <Route path={`${match.path}/registeredofficials`}>
              <RegisteredOfficials officials={officials} />
            </Route>
            <Route path={`${match.path}/athletelist`}>
              <Table columns={columns} tableContent={athletes} updateTable={updateTable} />
            </Route>
          </div>
        )}
        {role === 'coach' && status === 'not_started' && (
          <div>
            <Route exact path={match.path}>
              <MyAthletes athletes={athletes} updateTable={updateTable} onDelete={deleteRow} />
            </Route>
            <Route path={`${match.path}/athleteregistration`}>
              <AthleteRegistration onAdd={addAthlete} />
            </Route>
          </div>
        )}
        {role === 'judge' && (
          <Route path={match.path}>
            <Judge
              athletes={athletes}
              goToNextAttempt={goToNextAttempt}
              castVote={castVote}
              timer={timer}
              status={status}
              lift={lift}
              spot={filteredUser[0].spot}
              verdict={verdict}
              setAttemptTime={setAttemptTime}
              attemptTime={attemptTime}
            />
          </Route>
        )}
        {isAdmin && (
          <Route path={match.path}>
            <CompetitionAdmin
              nextLift={nextLift}
              lift={lift}
              toggleTimer={setTimer}
              timer={timer}
              athletes={athletes}
              attemptTime={attemptTime}
              setAttemptTime={setAttemptTime}
            />
          </Route>
        )}
        {role === 'coach' && (
          <Route exact path={match.path}>
            <CoachInCompetition
              timer={timer}
              lift={lift}
              toggleTimer={setTimer}
              athletes={athletes}
              setAttemptTime={setAttemptTime}
              attemptTime={attemptTime}
            />
          </Route>
        )}
        {registrations.find(reg => reg.name === userName) !== undefined && (
          <Route path={match.path}>
            <h1>Your application hasn't been accepted yet!</h1>
          </Route>
        )}
        {status === 'not_started' && (
          <Route path={match.path}>
            <RoleSelection />
          </Route>
        )}
      </Switch>
    </div>
  );
};

export default HandleCompetition;
