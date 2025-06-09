import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import RoutesConfig from "./route.tsx";
import { BrowserRouter } from "react-router-dom";
import AppLayout from "./components/app-layout.tsx";
import { AppProvider } from "./components/app-provider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppProvider>
      <BrowserRouter>
        <AppLayout>
          <RoutesConfig />
        </AppLayout>
      </BrowserRouter>
    </AppProvider>
  </StrictMode>
);
