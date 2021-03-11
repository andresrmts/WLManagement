import React from 'react';
import { useAuthContext } from '../../AuthContext';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const { userId, setUserId, setUserName, setUserEmail, setRole } = useAuthContext();

  const signOut = () => {
    setUserId(null);
    setUserName(null);
    setUserEmail(null);
    setRole(null);
  };

  if (userId) {
    return (
      <nav className="flex justify-center mv0">
        <Link to="/" onClick={() => signOut()} className="f5 f3-ns pa3 underline pointer black-90">
          Sign Out
        </Link>
      </nav>
    );
  } else {
    return (
      <nav className="flex justify-center">
        <Link to="/" className="f3-ns f5 pa3 underline pointer black-90">
          Sign In
        </Link>
        <Link to="/register" className="f3-ns f5 pa3 underline pointer black-90">
          Register
        </Link>
      </nav>
    );
  }
};

export default Navigation;
