import React from 'react';

const RoleSelection = ({onRouteChange}) => {
	return (
		<div className="tc">
			<button 
					className="f2 link dim br-pill ba ph3 pv2 ma2 dib mid-gray pointer"
					onClick={() => onRouteChange('competition')}
					>
					Coach
			</button>
			<button 
					className="f2 link dim br-pill ba ph3 pv2 ma2 dib mid-gray pointer"
					onClick={() => onRouteChange('competition')}
					>
					Judge
			</button>
		</div>
	)
}

export default RoleSelection;