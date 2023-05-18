import { useContext, createContext, useState, useCallback, useEffect } from "react";
import PropTypes from "prop-types";

const TokenContext = createContext();

const TokenProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [tickingInterval, setTickInterval] = useState(null);

  const toggleRefresh = useCallback(
    (status) => {
      if (status) {
        let i = setInterval(() => {
          const requestOptions = {
            method: "GET",
            credentials: "include",
          };
    
          fetch(`http://localhost:8080/refresh`, requestOptions)
            .then((response) => response.json())
            .then((data) => {
              if (data.access_token) {
                setToken(data.access_token);
              }
            })
            .catch(() => {
              console.log("user not logged in");
            });
        }, 600000);
        setTickInterval(i);
      } else {
        setTickInterval(null);
        clearInterval(tickingInterval);
      }
    },
    [tickingInterval]
  );

  useEffect(() => {
    if (token === null) {
      const requestOptions = {
        method: "GET",
        credentials: "include",
      };

      fetch(`http://localhost:8080/refresh`, requestOptions)
        .then((response) => response.json())
        .then((data) => {
          if (data.access_token) {
            setToken(data.access_token);
            toggleRefresh(true);
          }
        })
        .catch((error) => {
          console.log("user not logged in", error);
        });
    }
  }, [token, setToken, toggleRefresh]);

  return (
    <TokenContext.Provider
      value={{
        token,
        setToken,
        tickingInterval,
        toggleRefresh,
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
