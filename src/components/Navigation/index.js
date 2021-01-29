import React from 'react';
import { Link } from '../../Router';
import { routes } from '../../Router/routes';

const Navigation = ({adminToggle, isSignedIn, setSignedIn}) => {
			if (isSignedIn) {
				return (
					<nav style={{display: 'flex', justifyContent: 'center'}}>
						<Link to={routes.home.path} onClick={() => setSignedIn(routes.home.path)} className="f3 pa3 underline pointer">Sign Out</Link>
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