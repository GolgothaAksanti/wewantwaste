import { ArrowRight } from "lucide-react";

import { useStepper } from "@/hooks/use-stepper";
import { steps } from "@/utils/data";

export const AddressForm = () => {
  const { selectedAddress, setCurrentStep, currentStep } = useStepper();

  const handleOnContinue = () => {
    const currentStepIndex = steps.findIndex(
      (item) => item.key === currentStep.key
    );
    setCurrentStep(steps[currentStepIndex + 1]);
  };

  return (
    <form action="#" className="space-y-4">
      <div className="space-y-2">
        <p>City</p>
        <input
          type="text"
          className="p-3 border border-zinc-800 bg-zinc-900 outline-none w-full rounded-lg"
          value={selectedAddress?.Description.split(" ")[0]}
        />
      </div>

      <div className="space-y-2">
        <p>Street Name</p>
        <input
          type="text"
          readOnly
          className="p-3 border border-zinc-800 bg-zinc-900 outline-none w-full rounded-lg"
          value={selectedAddress?.Text.split(" ")[1]}
        />
      </div>

      <div className="space-y-2">
        <p>House/Flat Number</p>
        <input
          type="text"
          readOnly
          className="p-3 border border-zinc-800 bg-zinc-900 outline-none w-full rounded-lg"
          value={selectedAddress?.Text.split(" ")[0]}
        />
      </div>
      <button
        onClick={handleOnContinue}
        className="flex bg-indigo-600 cursor-pointer gap-4 items-center justify-center p-3 w-full rounded-lg"
      >
        Continue <ArrowRight />
      </button>
    </form>
  );
};
