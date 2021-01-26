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
					let usableFunction;
					const isFunction = () => {
						if (props.outSideProps.functions) {
							const isTrue = Object.keys(props.outSideProps.functions).filter(functionName => functionName === prop).length > 0 ? true : false;
							usableFunction = props.outSideProps.functions[prop];
							return isTrue
						}
					}
					
					return (
						<td key={i} headers={`${prop}`} onClick={isFunction() ? () => usableFunction(athleteName) : undefined}  className="tc pa3">{props.rowProps[prop]}</td>
					)
				})
			}
		</tr>
	)
}

export default TableRow;

// 