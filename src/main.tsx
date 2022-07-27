import React from "react";
import ReactDOM from "react-dom/client";
import ThemeProvider from "./core/themes/theme-provider";
import App from "./App";
import { GlobalStyles } from "./core/styles/global.styles";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
