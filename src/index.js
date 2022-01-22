import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./constants/Theme";
import { ToastContainer } from "react-toastify";
import App from "./App";
import { Container } from "./App.styled";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Container>
          <ToastContainer />
          <App />
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);
