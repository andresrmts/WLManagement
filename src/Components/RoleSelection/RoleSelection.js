import React from 'react';

const RoleSelection = ({ changeCompRoute, joinComp, name }) => {
	return (
		<div className="tc">
			<button 
					className="f2 link dim br-pill ba ph3 pv2 ma2 dib mid-gray pointer"
					onClick={() => {
						joinComp(name, 'coach')
						changeCompRoute('home')
					}}
					>
					Coach
			</button>
			<button 
					className="f2 link dim br-pill ba ph3 pv2 ma2 dib mid-gray pointer"
					onClick={() => {
						joinComp(name, 'judge')
						changeCompRoute('home')
					}}
					>
					Judge
			</button>
			<button 
					className="f2 link dim br-pill ba ph3 pv2 ma2 dib mid-gray pointer"
					onClick={() => {
						joinComp(name, 'changetable')
						changeCompRoute('home')
					}}
					>
					Change Table
			</button>
		</div>
	)
}

export default RoleSelection;