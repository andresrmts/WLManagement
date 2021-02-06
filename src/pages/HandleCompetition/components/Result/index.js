import React from 'react';
import { useCompetitionContext } from '../../CompetitionContext';

const Result = () => {
	const { verdict } = useCompetitionContext();
	if (verdict.result < 0 && verdict.votes === 3) {
		return (
			<div className="flex flex-column center tc bg-red vh-25">
				NO LIFT
			</div>
		)
	} else if (verdict.result > 0 && verdict.votes === 3) {
		return (
			<div className="flex flex-column center tc bg-green vh-25">
				GOOD LIFT
			</div>
		)
	} else {
		return (
			<div className="flex flex-column center tc bg-black vh-25">
			</div>
		)
	}
}

export default Result;