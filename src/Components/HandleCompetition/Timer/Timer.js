import React, { useState, useEffect } from 'react';

const Timer = () => {
	const [seconds, setSeconds] = useState(0 + '0');
	const [minutes, setMinutes] = useState(1);
	const [count, setCount] = useState(true)

	const updateTime = () => {
		if (minutes === 0 && seconds === 0) {
			setSeconds(0 + '0');
			setMinutes(1);
		} else {
			if (seconds === 0 + '0') {
				setMinutes(minutes => minutes - 1);
				setSeconds(59);
			} else if (count === false) {
				setSeconds(seconds);
			} else if (count === true) {
				setSeconds(seconds => seconds - 1);
			}
		}
	}

	useEffect(() => {
		const token = setTimeout(updateTime, 1000)
		const cleanUp = () => clearTimeout(token);

		return cleanUp;
	}, [seconds, count])

	return (
		<h1 onClick={() => setCount(prevCount => !prevCount)} >{minutes}:{seconds}</h1>
	)
}

export default Timer; 