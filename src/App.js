import React from "react";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import Routes from "./router";

import { GlobalStyles } from "./styles/globalStyles";
import DefaultTheme from "./styles/defaultTheme";

import { AppProvider, UserProvider } from "./application/context";

const App = () => (
  <ThemeProvider theme={DefaultTheme}>
    <UserProvider>
      <AppProvider>
        <GlobalStyles />
        <ToastContainer />
        <Routes />
      </AppProvider>
    </UserProvider>
  </ThemeProvider>
);

export default App;