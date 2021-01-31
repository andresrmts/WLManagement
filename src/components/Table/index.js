import React from 'react';
import TableRow from './TableRow';

const Table = ({headers, tableContent, props, outSideProps}) => {

	return (
		<div className="pa4">
			<div className="center overflow-auto">
			   <table className="f6 w-100 mw8" cellSpacing="0">
				   <thead>
				      <tr className="stripe-dark">
				      	{
				      		headers.map((header, i) => {
				      			return (
				      				<th key={i} id={`${header.header}`} className={`${header.styles}`}>{header.header}</th>
				      			)
				      		})
				      	}
				     	</tr>
				   </thead>
				   <tbody className="lh-copy">
				   		{
				   			tableContent.map((row, i) => {
				   				const rowProps = Object.fromEntries(Object.entries(props)
				   					.map(([key, val]) => [key, `${row[key]}`]))
				   				return (
				   					<TableRow
				   						key={i} 
				   						rowProps={rowProps}
				   						outSideProps={outSideProps}
				   					/>
				   				)
				   			})
				   		}
				   </tbody>
				</table>
			</div>
		</div>
	)
}

export default Table;