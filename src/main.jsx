import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import PortfolioContextProvider from "./store/portfolio-context.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PortfolioContextProvider>
      <App />
    </PortfolioContextProvider>
  </StrictMode>,
);
