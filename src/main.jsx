import React from "react";
import styled from "styled-components";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

import App from "./App.jsx";
import { store } from "./redux/store";

import { primaryColors } from "./assets/Colors.jsx";

const StyledApp = styled.section`
  background-color: ${primaryColors.DashBoardBackground};
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 100%;
`;

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <StyledApp>
          <App />
        </StyledApp>
        <ToastContainer />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
