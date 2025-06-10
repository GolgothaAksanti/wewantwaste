import { useState } from "react";
import clsx from "clsx";

import { useStepper } from "@/hooks/use-stepper";
import type { WasteType } from "@/types/types";
import { CustomizedCheckbox } from "./widgets/customized-check-box";

type Props = {
  waste: WasteType;
};

export const WasteTypeItem = ({ waste }: Props) => {
  const { setSelectedWasteTypes, selectedWasteTypes } = useStepper();
  const [selected, setSelected] = useState(false);

  const handleSelect = () => {
    if (selectedWasteTypes?.find((item) => item.id === waste.id)) {
      setSelectedWasteTypes(
        selectedWasteTypes.filter((item) => item.id !== waste.id)
      );
      setSelected(false);
    } else {
      setSelectedWasteTypes([waste, ...selectedWasteTypes]);
      setSelected(true);
    }
  };

  return (
    <div
      onClick={handleSelect}
      className={clsx(
        "border-2 relative group cursor-pointer hover:border-indigo-800 hover:bg-indigo-900/20 rounded-lg transition-colors duration-200 ease-in  bg-zinc-900 p-4 lg:p-6",
        selected ? `border-indigo-800` : `border-zinc-800`
      )}
    >
      <div className="flex items-center gap-x-4">
        <div className="w-12 h-12 rounded-full  border group-hover:text-indigo-800 border-zinc-800 flex items-center justify-center">
          <waste.icon
            className={clsx("", selected ? `text-indigo-500` : `text-zinc-800`)}
          />
        </div>
        <div>
          <p className="font-medium">{waste.title}</p>
          <p className="text-zinc-400 text-xs lg:text-base">
            {waste.description}
          </p>
        </div>
      </div>
      <CustomizedCheckbox checked={selected} />
    </div>
  );
};
