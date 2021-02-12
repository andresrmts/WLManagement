import React from 'react';
import { useAuthContext } from '../../AuthContext';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const { userId, setUserId, setUserName, setUserEmail } = useAuthContext();

  const signOut = () => {
    setUserId(null);
    setUserName(null);
    setUserEmail(null);
  };

  if (userId) {
    return (
      <nav style={{ display: 'flex', justifyContent: 'center' }}>
        <Link to="/" onClick={() => signOut()} className="f3 pa3 underline pointer black-90">
          Sign Out
        </Link>
      </nav>
    );
  } else {
    return (
      <nav style={{ display: 'flex', justifyContent: 'center' }}>
        <Link to="/" className="f3 pa3 underline pointer black-90">
          Sign In
        </Link>
        <Link to="/register" className="f3 pa3 underline pointer black-90">
          Register
        </Link>
      </nav>
    );
  }
};

export default Navigation;
