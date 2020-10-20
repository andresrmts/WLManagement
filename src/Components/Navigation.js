import React from 'react';

const Navigation = () => {
	return (
		<nav style={{display: 'flex', justifyContent: 'center'}}>
			<p className="f3 pa3 underline pointer">Sign In</p>
			<p className="f3 pa3 underline pointer">Register</p>
			<p className="f3 pa3 underline pointer">Sign Out</p>
		</nav>
	)
}

export default Navigation;