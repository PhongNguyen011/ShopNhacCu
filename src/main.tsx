import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import App from "./App.tsx";
import "./styles/styles.css";
import { MainProvider } from "./context/mainprovider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MainProvider>
      <App />
    </MainProvider>
  </StrictMode>
);
