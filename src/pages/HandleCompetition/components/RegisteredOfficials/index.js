import React from 'react';
import Table from '../../../../components/Table';

const RegisteredOfficials = ({ acceptedRegistrations }) => {
	const headers = [
		{
			header: 'Name',
			styles: 'fw6 pa3 bg-white'
		},
		{
			header: 'Role',
			styles: 'fw6 pa3 bg-white'
		},
		{
			header: 'Delete?',
			styles: 'fw6 pa3 bg-white'
		}
	]

	const props = {name: '', role: '', delete:''}
	return <Table props={props} headers={headers} tableContent={acceptedRegistrations} />
}

export default RegisteredOfficials;