import React from 'react';

const Result = ({ result }) => {
	if (result === 0) {
		return (
			<div className="flex flex-column center tc bg-black vh-25">
			</div>
		)
	} else if (result < 0) {
		return (
			<div className="flex flex-column center tc bg-red vh-25">
				NO LIFT
			</div>
		)
	} else {
		return (
			<div className="flex flex-column center tc bg-green vh-25">
				GOOD LIFT
			</div>
		)
	}
}

export default Result;