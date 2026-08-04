import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { ThemeProvider, CssBaseline } from "@mui/material";

import App from "./App";

import theme from "./theme/theme";

import "./index.css";
import "./styles/global.css";

import { IntelligenceProvider } from "./context/IntelligenceContext";
import { ProgrammeProvider } from "./context/ProgrammeContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <BrowserRouter>
        <ProgrammeProvider>
  <IntelligenceProvider>
    <App />
  </IntelligenceProvider>
</ProgrammeProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);