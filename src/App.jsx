import { createContext, useContext, useState } from "react";
import { RouterProvider } from "react-router-dom";

import { router } from "./Router.jsx";

export const scrollContext = createContext();
export const useScroll = () => useContext(scrollContext);

function App() {
  const [action, setAction] = useState("Sign Up");

  return (
    <scrollContext.Provider value={{ action, setAction }}>
      <RouterProvider router={router} />
    </scrollContext.Provider>
  );
}

export default App;
