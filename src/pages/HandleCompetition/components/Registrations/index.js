import React from 'react';
import { useCompsContext } from '../../../../CompetitionsContext';
import Table from '../../../../components/Table';
import { useCompetitionContext } from '../../CompetitionContext';

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
  const outSideProps = { rows: { content: ['Yes', 'No'] }, functions: { approve: approveRemove } };
  return <Table props={props} headers={headers} tableContent={registrations} outSideProps={outSideProps} />;
};

export default Registrations;
