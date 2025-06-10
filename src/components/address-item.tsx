import { MapPin } from "lucide-react";

import type { Address } from "@/types/types";

type Props = {
  address: Address;
  onSelect: (address: Address) => void;
};

export const AddressItem = ({ address, onSelect }: Props) => {
  return (
    <button
      onClick={() => onSelect(address)}
      className="flex items-center gap-4 cursor-pointer w-full border-b border-zinc-800 bg-zinc-900 p-4"
    >
      <MapPin className="text-indigo-600" />

      <div className="space-y-1">
        <p className="font-medium">{address.Text}</p>
        <p className="text-zinc-400 text-sm">{address.Description}</p>
      </div>
    </button>
  );
};
