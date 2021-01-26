import React from 'react';
import { Link } from '../router/';
import { routes } from '../router/routes';

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
						<Link to={routes.home.path} className='f3 pa3 underline pointer'>Sign In</Link>
						<Link to={routes.register.path} className='f3 pa3 underline pointer'>Register</Link>
					</nav>
					)			
			}
}

export default Navigation;