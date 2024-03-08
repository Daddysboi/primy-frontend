import { RouterProvider } from "react-router-dom";
import { AOS } from "aos";
import "aos/dist/aos.css";
import { TailSpin as Loader } from "react-loader-spinner";
import { ThemeProvider } from "styled-components";

import { router } from "./Router.jsx";
import "./App.css";

function App() {
  return (
    <ThemeProvider theme={{ mode: "light" }}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
