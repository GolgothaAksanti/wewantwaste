import { useEffect, useState } from "react";

import { BottomBar } from "@/components/bottom-bar";
import { SkipOption } from "@/components/skip-option";
import { WasteAddress } from "@/components/waste-address";
import { WasteStep } from "@/components/waste-steps";
import { WasteType } from "@/components/waste-type";
import { useStepper } from "@/hooks/use-stepper";
import { steps } from "@/utils/data";

export const HomePage = () => {
  const { currentStep } = useStepper();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentIndex(steps.findIndex((item) => item.key === currentStep.key));
  }, [currentStep]);

  return (
    <div className="w-screen h-screen overflow-y-scroll no-scrollbar pb-40 pt-4 space-y-10">
      {currentIndex !== 0 && <WasteStep />}

      {currentIndex === 0 && <WasteAddress />}

      {currentIndex === 1 && <WasteType />}

      {currentIndex === 2 && <SkipOption />}

      {currentIndex > 2 && (
        <div className="flex items-center justify-center text-zinc-400 text-lg animate-pulse">
          Coming soon
        </div>
      )}

      {currentIndex !== 0 && <BottomBar />}
    </div>
  );
};

export default HomePage;
