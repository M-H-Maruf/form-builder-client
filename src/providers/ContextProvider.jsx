import { createContext } from "react";
import { PropTypes } from "prop-types";

export const Context = createContext(null);


const ContextProvider = ({ children }) => {
  
  // providing info
  const contextInfo = {

  };

  return (
    <Context.Provider value={contextInfo}>{children}</Context.Provider>
  );
};

ContextProvider.propTypes = {
  children: PropTypes.object,
};

export default ContextProvider;
