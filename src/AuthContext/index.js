import React, { useState, useContext, createContext } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userName, setUserName] = useState('Külli');
  const [userId, setUserId] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [role, setRole] = useState('');

  const contextValue = { userName, userId, userEmail, isAdmin, role, setUserName, setUserEmail, setUserId, setIsAdmin, setRole };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('This function can only be used within AuthProvider');
  }
  return context;
}

export { AuthProvider, useAuthContext }