import React from 'react';
import { Redirect, Route } from 'react-router';
import { useAuthContext } from '../AuthContext';

const PrivateRoute = ({ children, ...rest }) => {
  const { userId } = useAuthContext();

  return (
    <Route
      {...rest}
      render={() =>
        userId ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: '/' },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
