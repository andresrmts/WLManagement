import React from 'react';

const Navigation = ({adminToggle, isSignedIn, onRouteChange}) => {
			if (isSignedIn) {
				return (
					<nav style={{display: 'flex', justifyContent: 'center'}}>
						<p onClick={() => {
							onRouteChange('signin')
							adminToggle(false)
						}} 
						className="f3 pa3 underline pointer">Sign Out</p>
					</nav>
				)				
			} else {
				return (
					<nav style={{display: 'flex', justifyContent: 'center'}}>
						<p onClick={() => onRouteChange('signin')} className="f3 pa3 underline pointer">Sign In</p>
						<p onClick={() => onRouteChange('register')} className="f3 pa3 underline pointer">Register</p>
					</nav>
					)			
			}
}

export default Navigation;