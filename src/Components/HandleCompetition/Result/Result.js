import React from 'react';

const Result = ({ result, votes, seeState }) => {
	if (result < 0 && votes === 3) {
		return (
			<div onClick={() => seeState()} className="flex flex-column center tc bg-red vh-25">
				NO LIFT
			</div>
		)
	} else if (result > 0 && votes === 3) {
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