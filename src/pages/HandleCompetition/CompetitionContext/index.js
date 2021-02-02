import React, { useState, useContext, createContext } from 'react';

const CompetitionContext = createContext();

const CompetitionProvider = ({children}) => {
  const [status, setStatus] = useState('notstarted');
  const contextValue = { status, setstatus: setStatus };

  return (
    <CompetitionContext.Provider value={contextValue}>
      {children}
    </CompetitionContext.Provider>
  )
}

const useCompetitionContext = () => {
  const context = useContext(CompetitionContext);
  if (context === undefined) {
    throw new Error('This function can only be used within CompetitionProvider')
  }
  return context;
}

export {CompetitionProvider, useCompetitionContext };