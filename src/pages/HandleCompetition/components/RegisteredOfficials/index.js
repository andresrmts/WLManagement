import React from 'react';
import Table from '../../../../components/Table';
import DeleteButton from '../../../../components/DeleteButton';

const RegisteredOfficials = ({ officials, onDelete }) => {
  const columns = [
    {
      name: 'id',
      hidden: true,
    },
    {
      name: 'name',
      columnName: 'Name',
    },
    {
      name: 'role',
      columnName: 'Role',
    },
    {
      template: DeleteButton,
      templateParams: { group: 'officials', onDelete: onDelete },
    },
  ];

  return <Table columns={columns} tableContent={officials} />;
};

export default RegisteredOfficials;
