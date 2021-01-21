import React from 'react';

const TableRow = (props) => {
	return (
		<tr className="stripe-dark">
			{
				Object.keys(props)
				.map((prop, i) => {
					return (
						<td key={i} headers={`${prop}`} className="tc pa3">{props[prop]}</td>
					)
				})
			}
		</tr>
	)
}

export default TableRow;