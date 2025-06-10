import { Info } from "lucide-react";

import { WASTE_TYPES } from "@/utils/data";
import { WasteTypeItem } from "./waste-type-item";

export const WasteType = () => {
  return (
    <div className=" lg:w-10/12 xl:w-10/12 lg:px-0 px-4 mx-auto space-y-8">
      <p className="text-center text-lg lg:text-2xl font-medium">
        What type of waste are you disposing of?
      </p>

      <div className="w-full border rounded-lg border-indigo-900 bg-blue-800/20 p-6 gap-4 flex items-center">
        <Info className="text-indigo-600" />
        <span>Select all that apply</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
        {WASTE_TYPES.map((item) => (
          <WasteTypeItem key={item.id} waste={item} />
        ))}
      </div>
    </div>
  );
};
