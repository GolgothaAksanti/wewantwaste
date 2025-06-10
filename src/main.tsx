import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import RoutesConfig from "./route.tsx";
import { BrowserRouter } from "react-router-dom";
import AppLayout from "./components/app-layout.tsx";
import { StepperProvider } from "./context/stepper-context.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StepperProvider>
      <BrowserRouter>
        <AppLayout>
          <RoutesConfig />
        </AppLayout>
      </BrowserRouter>
    </StepperProvider>
  </StrictMode>
);
