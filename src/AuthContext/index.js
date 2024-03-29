import React, { useState, useContext, createContext } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userName, setUserName] = useState(null);
  const [userId, setUserId] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [role, setRole] = useState(null);

  const contextValue = {
    userName,
    userId,
    userEmail,
    role,
    setUserName,
    setUserEmail,
    setUserId,
    setRole,
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('This function can only be used within AuthProvider');
  }
  return context;
};

export { AuthProvider, useAuthContext };
