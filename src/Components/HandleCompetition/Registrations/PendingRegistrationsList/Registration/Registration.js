import React from 'react';

const Registration = ({approveRemove, name, role}) => {
	if (approveRemove) {
		return (
			<div className="tc pt0 pa5 pb0 flex flex-nowrap">
				<div className="fl w-100 w-third-ns pa2 tc bb flex flex-nowrap">
					<p>{name}</p>
				</div>
				<div className="fl w-100 w-third-ns pa2 tc bb">
					<p>{role}</p>
				</div>
				<div className="fl w-100 w-third-ns pa2 tc bb flex justify-around">
					<p className="pointer" onClick={() => approveRemove('yes', name, role)}>Yes</p>
					<p className="pointer" onClick={() => approveRemove('no', name, role)} >No</p>
				</div>
			</div>
		)
	} else {
		return (
			<div className="tc pt0 pa5 pb0 flex flex-nowrap">
				<div className="fl w-100 w-third-ns pa2 tc bb flex flex-nowrap">
					<p>{name}</p>
				</div>
				<div className="fl w-100 w-third-ns pa2 tc bb">
					<p>{role}</p>
				</div>
				<div className="fl w-100 w-third-ns pa2 tc bb flex justify-around">
					<p className="f4">X</p>
				</div>
			</div>
		)
	}
}

export default Registration;