import React, { useState, useContext } from "react";
import { PropTypes } from "prop-types";

const AuthContext = React.createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  return useContext(AuthContext);
};

function getInitialState() {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
}

function checkLoggedIn() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  return isLoggedIn ? JSON.parse(isLoggedIn) : false;
}

export function AuthProvider(props) {
  const [authUser, setAuthUser] = useState(getInitialState);
  const [isLoggedIn, setIsloggedIn] = useState(checkLoggedIn);

  const saveLoggedInUser = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("isLoggedIn", true);
    setAuthUser(user);
    setIsloggedIn(true);
  };

  const signOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("isLoggedIn");
    setIsloggedIn(false);
    setAuthUser(null);
  };

  const value = {
    authUser,
    setAuthUser,
    isLoggedIn,
    setIsloggedIn,
    saveLoggedInUser,
    signOut,
  };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.any,
};
