import React, { useState, useEffect } from 'react';

const TableRow = (props) => {
	const [athleteName, setAthleteName] = useState('');

	useEffect(() => {
		setAthleteName(props.rowProps.name)
	}, [props.rowProps])


	return (
		<tr className="stripe-dark">
			{
				Object.keys(props.rowProps)
				.map((prop, i) => {
					const isFunction = () => {
						return Object.keys(props.outSideProps.functions).filter(functionName => functionName === prop).length > 0 ? true : false
					}
					const usableFunction = props.outSideProps.functions[prop];
					return (
						<td key={i} headers={`${prop}`} onClick={isFunction ? () => usableFunction(athleteName) : undefined}  className="tc pa3">{props.rowProps[prop]}</td>
					)
				})
			}
		</tr>
	)
}

export default TableRow;