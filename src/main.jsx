import React from "react";
import styled from "styled-components";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NextUIProvider } from "@nextui-org/react";

import App from "./App.jsx";
import { store } from "./redux/store";

import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { primaryColors } from "./assets/Colors.jsx";

const queryClient = new QueryClient();

const StyledApp = styled.div`
  background-color: ${primaryColors.DashBoardBackground};
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 100%;
`;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <StyledApp>
          <NextUIProvider>
            <App />
          </NextUIProvider>
        </StyledApp>
        <ToastContainer />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
