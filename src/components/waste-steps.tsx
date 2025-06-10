import clsx from "clsx";

import { useStepper } from "@/hooks/use-stepper";
import { steps } from "@/utils/data";

export const WasteStep = () => {
  const { currentStep, setCurrentStep } = useStepper();

  return (
    <div className="px-4 w-full lg:px-0 lg:w-10/12 xl:w-8/12 lg:mx-auto">
      <div className="flex w-full items-center whitespace-nowrap justify-center overflow-x-scroll text-xs no-scrollbar gap-4 p-4">
        {steps.map((step, index) => {
          const currentIndex = steps.findIndex(
            (item) => item.key === currentStep.key
          );
          const isActive = index === currentIndex;

          const isCompleted = index < currentIndex;
          const isAvailable = index <= currentIndex;

          return (
            <div key={index} className="flex items-center gap-2">
              <button
                onClick={() => {
                  setCurrentStep(step);
                }}
                className={clsx(
                  `flex whitespace-nowrap items-center space-x-1 md:space-x-2  text-white`,
                  isActive
                    ? "text-white"
                    : isCompleted
                    ? "text-whites"
                    : "text-white/40",
                  !isAvailable ? "cursor-not-allowed" : "cursor-pointer"
                )}
                disabled={!isAvailable}
              >
                <div
                  className={`flex items-center justify-center md:h-5 md:w-5 md:text-xs`}
                >
                  <step.icon
                    className={clsx(
                      "",
                      isCompleted || isActive
                        ? "text-indigo-600"
                        : "text-white/30"
                    )}
                  />
                </div>
                <div>
                  <h3 className="font-medium text-lg">{step.label}</h3>
                </div>
              </button>

              {index !== steps.length - 1 && (
                <div className="w-8 h-px bg-white/20" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
