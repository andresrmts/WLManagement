import React from 'react';
import Table from '../../../../components/Table';
import AddRemove from '../../../../components/AddRemove';

const Registrations = ({ registrations, onDelete, onApprove }) => {
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
      template: AddRemove,
      templateParams: { group: 'registrations', onDelete: onDelete, onApprove: onApprove },
    },
  ];

  return (
    <div className="w-100">
      <Table columns={columns} tableContent={registrations} />
    </div>
  );
};

export default Registrations;
