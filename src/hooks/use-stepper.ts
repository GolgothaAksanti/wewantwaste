import { useContext } from "react";

import { StepperContext } from "@/context/stepper-context";

export const useStepper = () => {
  const context = useContext(StepperContext);
  if (!context)
    throw new Error("useStepper must be used within StepperProvider");
  return context;
};
