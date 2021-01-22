import React from 'react';

const TableRow = (props) => {
	return (
		<tr className="stripe-dark">
			{
				Object.keys(props.rowProps)
				.map((prop, i) => {
					return (
						<td key={i} headers={`${prop}`} className="tc pa3">{props.rowProps[prop]}</td>
					)
				})
			}
		</tr>
	)
}

export default TableRow;