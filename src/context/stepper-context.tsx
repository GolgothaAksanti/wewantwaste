/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Address, Step, WasteType } from "@/types/types";
import { steps } from "@/utils/data";
import React, { createContext, useState } from "react";

interface StepperContextProps {
  currentStep: Step;
  setCurrentStep: (step: Step) => void;
  selectedAddress: Address | null;
  setSelectedAddress: (address: Address | null) => void;
  selectedWasteTypes: WasteType[];
  setSelectedWasteTypes: (wastes: WasteType[]) => void;
}

export const StepperContext = createContext<StepperContextProps | undefined>(
  undefined
);

export const StepperProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [currentStep, setCurrentStep] = useState<Step>(steps[0]);
  const [selectedAddress, setSelectedAddress] = useState<Address | null>(null);
  const [selectedWasteTypes, setSelectedWasteTypes] = useState<WasteType[]>([]);

  return (
    <StepperContext.Provider
      value={{
        currentStep,
        setCurrentStep,
        selectedAddress,
        setSelectedAddress,
        setSelectedWasteTypes,
        selectedWasteTypes,
      }}
    >
      {children}
    </StepperContext.Provider>
  );
};
