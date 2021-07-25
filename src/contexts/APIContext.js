import React, { createContext, useContext, useState } from "react";

const APIContext = createContext({});

const APIProvider = ({ children }) => {
  const [userCity, setUserCity] = useState(null);
  const [userEmail, setUserEmail] = useState(null);

  return (
    <APIContext.Provider
      value={{
        userCity,
        setUserCity,
        userEmail,
        setUserEmail,
      }}
    >
      {children}
    </APIContext.Provider>
  );
};

const useAPIContext = () => {
  const context = useContext(APIContext);
  return context;
};

export { useAPIContext, APIProvider };
