import React from "react";
import ReactDOM from "react-dom/client";
import ThemeProvider from "./core/themes/theme-provider";
import App from "./App";
import { GlobalStyles } from "./core/styles/global.styles";


import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>

      <ThemeProvider>
        <GlobalStyles />
        <App />
      </ThemeProvider>

    </BrowserRouter>
  </React.StrictMode>
);
