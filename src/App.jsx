import { createContext, useState } from "react";
import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

//optonal..You can decide to find cooler ones or stick with these
import { AOS } from "aos"; //This is for loading homepage components with animation
import "aos/dist/aos.css"; //& its styling
import { TailSpin as Loader } from "react-loader-spinner"; //cool spinner for loading

import RootLayout from "./components/RootLayout/RootLayout";
import Homepage from "./components/Pages/Homepage";
import Login from "./components/Pages/Login";
import Logout from "./components/Pages/Logout";
import Dashboard from "./components/Dashboard/Dashboard";
import Otp from "./components/Pages/Otp";

export const userContext = createContext(); //this is your provider for state management

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      //pages without Header i.e RootLayout
      <Route path="/otp" component={<Otp />} />
      <Route path="/dashboard" component={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/" element={<RootLayout />}>
        //pages Under Rootlayout with header and footer i.e Home
        <Route path="/" element={<Homepage />} />
      </Route>
    </>
  )
);

function App() {
  const [state, setState] = useState(""); //easiest and straignt foward way for global state management.. trust me, you can also use a useReducer instead

  return (
    <userContext.Provider vallue={{ state, setState }}>
      <RouterProvider router={router} />
    </userContext.Provider>
  );
}

export default App;
