import type { LucideProps } from "lucide-react";

export type Address = {
  Id: string;
  Type: string;
  Text: string;
  Highlight: string;
  Description: string;
};

export type Step = {
  label: string;
  key: string;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
};

export type WasteType = {
  id: string;
  title: string;
  description: string;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
};

export type SkipOptionType = {
  id: number;
  size: number;
  hire_period_days: number;
  price_before_vat: number;
  vat: number;
  allowed_on_road: boolean;
  allows_heavy_waste: boolean;
};
