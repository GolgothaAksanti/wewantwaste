import { Check } from "lucide-react";

type Props = {
  checked: boolean;
};

export const CustomizedCheckbox = ({ checked }: Props) => {
  return (
    <label className="absolute right-6 top-6 inline-flex cursor-pointer items-center space-x-2">
      <input type="checkbox" checked={checked} readOnly className="hidden" />
      <div
        className={`flex h-6 w-6 items-center justify-center rounded-md border-2  ${
          checked ? "bg-indigo-800 border-indigo-800" : "border-zinc-800"
        } transition-colors`}
      >
        {checked && <Check size={13} className="text-white" />}
      </div>
    </label>
  );
};
