import React from 'react';
import TableRow from './TableRow/TableRow';

const Table = ({headers, tableContent}) => {
	// const props = {
	// 	name: row.name,
	// 	age: row.age,
	// 	weight: row.weight,
	// 	snatch: row.snatch,
	// 	cnj: row.cnj,
	// 	coachName: row.coachname
	// }

	return (
		<div className="pa4">
			<div className="center overflow-auto">
			   <table className="f6 w-100 mw8" cellSpacing="0">
				   <thead>
				      <tr className="stripe-dark">
				      	{
				      		headers.map((header, i) => {
				      			return (
				      				<th id={`${header.header}`} className={`${header.styles}`}>{header.header}</th>
				      			)
				      		})
				      	}
				     	</tr>
				   </thead>
				   <tbody className="lh-copy">
				   		{
				   			tableContent.map((row, i) => {
				   				// const rowProps = Object.fromEntries(Object.entries(props)
				   				// 	.map(([key, val]) => [key, `${row.val}`]))
				   				const props = {
										name: row.name,
										age: row.age,
										weight: row.weight,
										snatch: row.snatch,
										cnj: row.cnj,
										coachName: row.coachname
									}
				   				return (
				   					<TableRow
				   						key={i} 
				   						{...props}
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