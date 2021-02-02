import React from 'react';
import { useCompetitionContext } from '../../CompetitionContext';

const RoleSelection = () => {
	const { changeCompRoute, joinComp, officialName } = useCompetitionContext();
	return (
		<div className="tc">
			<button 
					className="f2 link dim br-pill ba ph3 pv2 ma2 dib mid-gray pointer"
					onClick={() => {
						joinComp(officialName, 'coach')
						changeCompRoute('home')
					}}
					>
					Coach
			</button>
			<button 
					className="f2 link dim br-pill ba ph3 pv2 ma2 dib mid-gray pointer"
					onClick={() => {
						joinComp(officialName, 'judge')
						changeCompRoute('home')
					}}
					>
					Judge
			</button>
			<button 
					className="f2 link dim br-pill ba ph3 pv2 ma2 dib mid-gray pointer"
					onClick={() => {
						joinComp(officialName, 'changetable')
						changeCompRoute('home')
					}}
					>
					Change Table
			</button>
		</div>
	)
}

export default RoleSelection;