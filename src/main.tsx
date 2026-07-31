import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./styles/global.css";
import App from "./App";
import { IntelligenceProvider } from "./context/IntelligenceContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <IntelligenceProvider>
      <App />
    </IntelligenceProvider>
  </StrictMode>
);
