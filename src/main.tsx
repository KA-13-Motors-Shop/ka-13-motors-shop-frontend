import React from "react";
import ReactDOM from "react-dom/client";
import ThemeProvider from "./core/themes/theme-provider";
import App from "./App";
import { GlobalStyles } from "./core/styles/global.styles";
import { Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* <Router> */}
      <ThemeProvider>
        <GlobalStyles />
        <App />
      </ThemeProvider>

    {/* </Router> */}
  </React.StrictMode>
);
