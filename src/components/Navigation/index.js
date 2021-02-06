import React from 'react';
import { useAuthContext } from '../../AuthContext';
import { Link } from '../../Router';
import { routes } from '../../Router/routes';

const Navigation = () => {
	const { userId, setUserId, setUserName, setUserEmail } = useAuthContext();

	const signOut = () => {
		setUserId(null);
		setUserName(null);
		setUserEmail(null);
	}

	if (userId) {
		return (
			<nav style={{display: 'flex', justifyContent: 'center'}}>
				<Link to={routes.home.path} onClick={() => signOut()} className="f3 pa3 underline pointer">Sign Out</Link>
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