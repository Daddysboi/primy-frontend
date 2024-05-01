import { RouterProvider } from "react-router-dom";

import { router } from "./Router.jsx";
import "./App.css";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
