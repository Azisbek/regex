import { createContext, useState } from "react";

export const validTextContext = createContext();

const ValidContext = ({ children }) => {
  const [state, setState] = useState(false);

  const addIsValid = () => {
    setState(true);
  };

  return (
    <validTextContext.Provider value={{ state, addIsValid }}>
      {children}
    </validTextContext.Provider>
  );
};

export default ValidContext;
