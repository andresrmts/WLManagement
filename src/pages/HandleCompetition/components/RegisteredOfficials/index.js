import React from 'react';
import { useCompsContext } from '../../../../CompetitionsContext';
import Table from '../../../../components/Table';

const RegisteredOfficials = ({ officials }) => {
  const { approveRemove } = useCompsContext();
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
      header: 'Delete?',
      styles: 'fw6 pa3 bg-white',
    },
  ];

  const props = { name: '', role: '', delete: '' };
  const specificProps = ['Delete'];
  return (
    <Table
      props={props}
      headers={headers}
      tableContent={officials}
      specificProps={specificProps}
      approveRemove={approveRemove}
    />
  );
};

export default RegisteredOfficials;
