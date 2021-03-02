import React from 'react';
import { useAuthContext } from '../../../../AuthContext';
import Table from '../../../../components/Table';
import DeleteButton from '../../../../components/DeleteButton';

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
  ];

  // const props = {
  //   name: '',
  //   age: '',
  //   weight: '',
  //   snatch: '',
  //   cnj: ''
  // };

  const props = [
    {
      name: 'id',
      hidden: true,
    },
    {
      name: 'name',
    },
    {
      name: 'age',
    },
    {
      name: 'weight',
      editable: true,
    },
    {
      name: 'snatch',
      editable: true,
    },
    {
      name: 'cnj',
      editable: true,
    },
    {
      template: DeleteButton,
      templateParams: 'athletes',
    },
  ];

  return <Table props={props} headers={headers} tableContent={onlyCoachAthletes} updateTable={updateTable} />;
};

export default MyAthletes;
