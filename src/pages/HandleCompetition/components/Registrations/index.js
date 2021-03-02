import React from 'react';
import Table from '../../../../components/Table';
import AddRemove from '../../../../components/AddRemove';

const Registrations = ({ registrations }) => {
  const headers = [
    {
      header: 'Name',
      styles: 'fw6 pa3 bg-white',
    },
    {
      header: 'Role',
      styles: 'fw6 pa3 bg-white',
    },
    {
      header: 'Approve?',
      styles: 'fw6 pa3 bg-white',
    },
  ];

  const props = [
    {
      name: 'id',
      hidden: true,
    },
    {
      name: 'name',
    },
    {
      name: 'role',
    },
    {
      template: AddRemove,
      templateParams: 'registrations',
    },
  ];

  return <Table props={props} headers={headers} tableContent={registrations} />;
};

export default Registrations;
