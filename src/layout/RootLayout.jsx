import { createContext, useContext, useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

export const scrollContext = createContext();
export const useScroll = () => useContext(scrollContext);

const RootLayout = () => {
  const [action, setAction] = useState("Sign Up");

  return (
    <scrollContext.Provider value={{ action, setAction }}>
      <Header />
      <Outlet />
      <Footer />
    </scrollContext.Provider>
  );
};

export default RootLayout;
