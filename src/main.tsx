import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import GlobalStyle from "./theme/global";
import { ThemeProvider } from "styled-components";
import token from "./theme/theme.token.json";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={token}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
