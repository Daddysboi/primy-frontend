import { createContext, useState, useContext } from "react";

export const UserContext = createContext();

// Custom hook to use the user context
export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    role: "admin",
    firstName: "Temi",
  });

  const updateUser = (userDate) => {
    setUser(userDate);
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
