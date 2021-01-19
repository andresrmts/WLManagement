import React from 'react';

const Registration = ({approveRemove, name, role}) => {
	if (approveRemove) {
		return (
			<tr className="stripe-dark">
		      <td className="tc pa3">{name}</td>
		      <td className="tc pa3">{role}</td>
		      <td className="flex justify-around tc pa3">
		      	<p className="pointer" onClick={() => approveRemove('yes', name, role)}>Yes</p>
					<p className="pointer" onClick={() => approveRemove('no', name, role)} >No</p>
				</td>
		   </tr>
		)
	} else {
		return (
			<tr className="stripe-dark">
		      <td className="tc pa3">{name}</td>
		      <td className="tc pa3">{role}</td>
		      <td className="tc pa3">X</td>
		   </tr>
		)
	}
}

export default Registration;