import React from 'react';
import Table from '../../../../components/Table';

const Registrations = ({ approveRemove, registrations }) => {
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
			header: 'Approve?',
			styles: 'fw6 pa3 bg-white'
		}
	]

	const props = {name: '', role: '', approve: ''}
	const outSideProps = {rows: {content: ['Yes', 'No']}}
	return <Table props={props} headers={headers} tableContent={registrations} outSideProps={outSideProps} />
}

export default Registrations;