import { createContext, useContext, useState } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

const lightTheme = {
  background: "#ffffff",
  text: "#000000",
};

const darkTheme = {
  background: "#000000",
  text: "#ffffff",
};

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ toggleTheme, isDarkMode }}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
