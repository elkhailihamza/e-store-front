import PropTypes from "prop-types";
import { createContext, useContext, useState } from "react";

const StateContext = createContext({
  token: null,
  setUser: () => {},
  setToken: () => {},
});

const ContextProvider = ({ children }) => {
  const [token, _setToken] = useState(localStorage.getItem("token"));
  
  const setToken = (token) => {
    _setToken(token);
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  };
  return (
    <StateContext.Provider value={{ token, setToken }}>
      {children}
    </StateContext.Provider>
  );
};

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
const useStateContext = () => useContext(StateContext);

// eslint-disable-next-line react-refresh/only-export-components
export { ContextProvider, useStateContext };
