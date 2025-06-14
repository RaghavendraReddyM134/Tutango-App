// context/AppContext.js

import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [role, setRole] = useState(null); // 'learner' or 'tutor'
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [tutorProfileCreated, setTutorProfileCreated] = useState(false);

  return (
    <AppContext.Provider
      value={{
        role,
        setRole,
        isLoggedIn,
        setIsLoggedIn,
        tutorProfileCreated,
        setTutorProfileCreated,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
