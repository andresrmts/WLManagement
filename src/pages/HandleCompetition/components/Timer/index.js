import React from 'react';

const Timer = ({seconds, minutes}) => {
	return (
		<h1>{minutes}:{seconds}</h1>
	)
}

export default Timer; 