import React, { useEffect } from 'react';
import AdminNav from './components/AdminNav';
import Registrations from './components/Registrations';
import CoachNav from './components/CoachNav';
import MyAthletes from './components/MyAthletes';
import RegisteredOfficials from './components/RegisteredOfficials';
import AthleteRegistration from './components/AthleteRegistration';
import Judge from './components/Judge';
import Result from './components/Result';
import ChangeTable from './components/ChangeTable';
import RoleSelection from './components/RoleSelection';
import CoachInCompetition from './components/CoachInCompetition';
import CompetitionAdmin from './components/CompetitionAdmin';
import Table from '../../components/Table';
import { useCompetitionContext } from './CompetitionContext';
import { Link, Switch, Route, useRouteMatch } from 'react-router-dom';
import { useAuthContext } from '../../AuthContext';

const HandleCompetition = () => {
  const {
    status,
    acceptedRegistrations,
    registeredAthletes,
    editAthleteWeight,
    registrations,
  } = useCompetitionContext();
  const { userName, isAdmin, role, setRole } = useAuthContext();
  const filteredName = acceptedRegistrations.filter(reg => reg.name === userName);
  const match = useRouteMatch();

  useEffect(() => {
    if (isAdmin) {
      setRole('admin');
      return;
    }
    if (filteredName[0]) {
      setRole(filteredName[0].role);
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

  const outSideProps = { functions: { weight: editAthleteWeight } };

  // <Switch>
  //   {isAdmin && status === 'notstarted' && (
  //     <div>
  //       <Route path={match.path}>
  //         <Registrations />
  //       </Route>
  //       <Route path={`${match.path}/registeredofficials`}>
  //         <RegisteredOfficials />
  //       </Route>
  //       <Route path={`${match.path}/athletelist`}>
  //         <Table props={props} headers={headers} tableContent={registeredAthletes} outSideProps={outSideProps} />
  //       </Route>
  //     </div>
  //   )}
  //   {role === 'coach' && status === 'notstarted' && (
  //     <div>
  //       <Route path={match.path}>
  //         <MyAthletes />
  //       </Route>
  //       <Route path={`${match.path}/athleteregistration`}>
  //         <AthleteRegistration />
  //       </Route>
  //     </div>
  //   )}
  //   {role === 'judge' && (
  //     <Route path={match.path}>
  //       <Judge />
  //     </Route>
  //   )}
  //   {isAdmin && (
  //     <Route path={match.path}>
  //       <CompetitionAdmin />
  //     </Route>
  //   )}
  //   {role === 'coach' && (
  //     <Route path={match.path}>
  //       <CoachInCompetition />
  //     </Route>
  //   )}
  //   {status === 'notstarted' && (
  //     <Route path={match.path}>
  //       <RoleSelection />
  //     </Route>
  //   )}
  // </Switch>

  // const renderCompRoutes = route => {
  //   const headers = [
  //     {
  //       header: 'Name',
  //       styles: 'fw6 pa3 bg-white',
  //     },
  //     {
  //       header: 'Age',
  //       styles: 'fw6 pa3 bg-white',
  //     },
  //     {
  //       header: 'Weight',
  //       styles: 'fw6 pa3 bg-white',
  //     },
  //     {
  //       header: 'Snatch',
  //       styles: 'fw6 pa3 bg-white',
  //     },
  //     {
  //       header: 'CNJ',
  //       styles: 'fw6 pa3 bg-white',
  //     },
  //     {
  //       header: 'Coachname',
  //       styles: 'fw6 pa3 bg-white',
  //     },
  //   ];
  //   const props = {
  //     name: '',
  //     age: '',
  //     weight: '',
  //     snatch: '',
  //     cnj: '',
  //     coachname: '',
  //   };
  //   const outSideProps = { functions: { weight: editAthleteWeight } };
  //   switch (route) {
  //     case 'home':
  //       if (status === 'notstarted') {
  //         if (isAdmin) {
  //           return <Registrations />;
  //         } else if (filteredName[0] && filteredName[0].role === 'coach') {
  //           return <MyAthletes />;
  //         } else if (filteredName[0] && filteredName[0].role === 'judge') {
  //           return <Judge />;
  //         } else if (filteredName[0] && filteredName[0].role === 'changetable') {
  //           return <ChangeTable />;
  //         } else if (registrations.find(reg => reg.name === userName) !== undefined) {
  //           return <h1>Your registration hasn't been accepted yet by the admin!</h1>;
  //         } else {
  //           return <RoleSelection />;
  //         }
  //       } else {
  //         if (isAdmin) {
  //           return <CompetitionAdmin />;
  //         } else if (filteredName[0] && filteredName[0].role === 'coach') {
  //           return <CoachInCompetition />;
  //         } else if (filteredName[0] && filteredName[0].role === 'judge') {
  //           return <Judge />;
  //         } else if (filteredName[0] && filteredName[0].role === 'changetable') {
  //           return <ChangeTable />;
  //         }
  //       }
  //       break;
  //     case 'registered':
  //       return <RegisteredOfficials />;
  //     case 'athletelist':
  //       return <Table props={props} headers={headers} tableContent={registeredAthletes} outSideProps={outSideProps} />;
  //     case 'athleteregistration':
  //       return <AthleteRegistration />;
  //     default:
  //       return <h1>Something went wrong...</h1>;
  //   }
  // };

  const renderNav = role => {
    switch (role) {
      case 'admin':
        return <AdminNav />;
      case 'coach':
        return <CoachNav />;
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
      {/* {renderCompRoutes(comproute)} */}
      <Switch>
        {isAdmin && status === 'notstarted' && (
          <div>
            <Route exact path={match.path}>
              <Registrations />
            </Route>
            <Route path={`${match.path}/registeredofficials`}>
              <RegisteredOfficials />
            </Route>
            <Route path={`${match.path}/athletelist`}>
              <Table props={props} headers={headers} tableContent={registeredAthletes} outSideProps={outSideProps} />
            </Route>
          </div>
        )}
        {role === 'coach' && status === 'notstarted' && (
          <div>
            <Route exact path={match.path}>
              <MyAthletes />
            </Route>
            <Route path={`${match.path}/athleteregistration`}>
              <AthleteRegistration />
            </Route>
          </div>
        )}
        {role === 'judge' && (
          <Route path={match.path}>
            <Judge />
          </Route>
        )}
        {isAdmin && (
          <Route path={match.path}>
            <CompetitionAdmin />
          </Route>
        )}
        {role === 'coach' && (
          <Route path={match.path}>
            <CoachInCompetition />
          </Route>
        )}
        {registrations.find(reg => reg.name === userName) !== undefined && (
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
