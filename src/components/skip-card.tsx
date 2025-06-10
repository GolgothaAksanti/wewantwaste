import { ArrowRight, TriangleAlert } from "lucide-react";

import type { SkipOptionType } from "@/types/types";
import skipImage from "@/assets/image.png";
import clsx from "clsx";

type Props = {
  skip: SkipOptionType;
  selected: SkipOptionType | null;
  onSelect: (skip: SkipOptionType | null) => void;
};

export const SkipCard = ({ skip, selected, onSelect }: Props) => {
  const handleSelect = () => {
    if (!skip.allowed_on_road && !skip.allows_heavy_waste) {
      return;
    }

    if (skip === selected) {
      onSelect(null);
    } else {
      onSelect(skip);
    }
  };
  return (
    <div
      onClick={handleSelect}
      className={clsx(
        "border rounded-lg bg-zinc-900s space-y-3  p-6",
        selected?.id === skip.id ? `border-indigo-900` : `border-zinc-800`,
        !skip.allowed_on_road && !skip.allows_heavy_waste
          ? ` opacity-40 cursor-not-allowed `
          : ` cursor-pointer`
      )}
    >
      <div
        className="bg-cover relative bg-center w-full h-48 rounded-lg"
        style={{ backgroundImage: `url(${skipImage})` }}
      >
        <span className="rounded-full top-4 right-4 text-xs absolute py-1 px-2 bg-indigo-600">
          {skip.size} Yards
        </span>

        <div className="absolute bottom-4 z-10 space-y-2 left-4">
          {!skip.allowed_on_road && (
            <p className="text-yellow-400 py-1 px-2 bg-zinc-900 flex items-center gap-2 text-xs rounded-lg">
              <TriangleAlert size={15} />
              <span>Not Allowed on a heavy road</span>
            </p>
          )}
          {!skip.allows_heavy_waste && (
            <p className="text-red-400 py-1 px-2 bg-zinc-900 flex items-center gap-2 text-xs rounded-lg">
              <TriangleAlert size={15} />
              <span>Not Suitable for heavy Waste</span>
            </p>
          )}
        </div>
      </div>
      <h2 className="text-lg font-medium">{skip.size} Yard Skip</h2>
      <p className="text-zinc-400 text-sm">
        {skip.hire_period_days} days Hire Period
      </p>
      <p className="text-indigo-600 font-medium text-lg">
        £{(skip.price_before_vat * (1 + skip.vat / 100)).toFixed(0)}
      </p>
      <button
        className={clsx(
          "p-3 rounded-lg outline-none w-full transition-colors duration-200 ease-in ",
          selected?.id === skip.id ? `bg-indigo-600` : `bg-zinc-800`
        )}
      >
        {selected?.id === skip.id ? (
          `Selected`
        ) : (
          <div className="flex items-center justify-center gap-4">
            <span>Select This Skip</span>
            <ArrowRight size={18} />
          </div>
        )}
      </button>
    </div>
  );
};
