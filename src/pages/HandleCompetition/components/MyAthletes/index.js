import React from 'react';
import { useAuthContext } from '../../../../AuthContext';
import Table from '../../../../components/Table';
import DeleteButton from '../../../../components/DeleteButton';

const MyAthletes = ({ athletes, updateTable, onDelete }) => {
  const { userId } = useAuthContext();
  const onlyCoachAthletes = athletes.filter(athlete => athlete.coachid === userId);

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
      template: DeleteButton,
      templateParams: { group: 'athletes', onDelete: onDelete },
    },
  ];

  return <Table columns={columns} tableContent={onlyCoachAthletes} updateTable={updateTable} />;
};

export default MyAthletes;
