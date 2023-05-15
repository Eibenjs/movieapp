import { useContext, createContext, useState } from "react";
import PropTypes from "prop-types";

const TokenContext = createContext();

const TokenProvider = ({ children }) => {
  const [token, setToken] = useState("");
  return (
    <TokenContext.Provider
      value={{
        token,
        setToken,
      }}
    >
      {children}
    </TokenContext.Provider>
  );
};

TokenProvider.propTypes = {
  children: PropTypes.node,
};

const useToken = () => {
  const context = useContext(TokenContext);
  if (context === undefined) {
    throw new Error("useToken must be used within a MovieProvider");
  }
  return context;
};

export { TokenProvider, useToken };
