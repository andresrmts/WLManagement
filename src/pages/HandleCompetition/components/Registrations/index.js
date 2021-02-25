import React from 'react';
import { useCompsContext } from '../../../../CompetitionsContext';
import Table from '../../../../components/Table';

const Registrations = ({ registrations }) => {
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
      header: 'Approve?',
      styles: 'fw6 pa3 bg-white',
    },
  ];

  const props = { name: '', role: '', approve: '' };
  const specificProps = ['Yes', 'No'];
  return (
    <Table
      props={props}
      headers={headers}
      tableContent={registrations}
      specificProps={specificProps}
      approveRemove={approveRemove}
    />
  );
};

export default Registrations;
