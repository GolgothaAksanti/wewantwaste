import { ArrowRight } from "lucide-react";

import { useStepper } from "@/hooks/use-stepper";
import { steps } from "@/utils/data";

export const BottomBar = () => {
  const { currentStep, setCurrentStep, selectedWasteTypes } = useStepper();

  const handleOnContinue = () => {
    const currentStepIndex = steps.findIndex(
      (item) => item.key === currentStep.key
    );

    if (steps.length - 1 === currentStepIndex) {
      return;
    }
    setCurrentStep(steps[currentStepIndex + 1]);
  };

  const handleBack = () => {
    const currentStepIndex = steps.findIndex(
      (item) => item.key === currentStep.key
    );

    if (currentStepIndex === 0) {
      return;
    }
    setCurrentStep(steps[currentStepIndex - 1]);
  };
  return (
    selectedWasteTypes.length > 0 && (
      <div className="fixed w-screen bottom-0 bg-zinc-900 border border-zinc-800">
        <div className="mx-auto px-4 lg:px-0 lg:w-10/12 xl:w-7/12">
          <div className="py-4 lg:p-4  flex lg:items-center lg:justify-between flex-col lg:flex-row gap-4">
            <div>
              <p>Selected Waste Types</p>
              <p className="text-zinc-500 text-sm">
                {currentStep.label.toLocaleLowerCase() === "waste type" && (
                  <p className="flex items-center gap-2">
                    {selectedWasteTypes.slice(2).map((item) => (
                      <span>{item.title}, </span>
                    ))}
                    <span>
                      {selectedWasteTypes.length > 2 &&
                        `${selectedWasteTypes.length - 2} More`}
                    </span>
                  </p>
                )}
              </p>
            </div>

            <div className="flex gap-4 items-center justify-end">
              <button
                onClick={handleBack}
                className="p-2 px-4 cursor-pointer bg-zinc-800 rounded-lg"
              >
                Back
              </button>
              <button
                onClick={handleOnContinue}
                className="p-2 px-4 cursor-pointer bg-indigo-600 rounded-lg flex gap-2 items-center"
              >
                Continue <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};
