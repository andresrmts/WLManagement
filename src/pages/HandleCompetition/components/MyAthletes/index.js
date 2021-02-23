import React from 'react';
import { useAuthContext } from '../../../../AuthContext';
import Table from '../../../../components/Table';

const MyAthletes = ({ athletes, updateTable }) => {
  const { userId } = useAuthContext();
  const onlyCoachAthletes = athletes.filter(athlete => athlete.coachid === userId);
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
  // const outSideProps = { functions: { weight: onWeightUpdate } };
  return <Table props={props} headers={headers} tableContent={onlyCoachAthletes} updateTable={updateTable} />;
};

export default MyAthletes;
