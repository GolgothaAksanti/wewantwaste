import {
  Hammer,
  Home,
  TreePine,
  Briefcase,
  MapPin,
  Truck,
  Shield,
  Calendar,
  CreditCard,
  Trash2,
} from "lucide-react";

import type { Step, WasteType } from "@/types/types";

export const WASTE_TYPES: WasteType[] = [
  {
    id: "construction",
    title: "Construction Waste",
    description: "Building materials and renovation debris.",
    icon: Hammer,
  },
  {
    id: "household",
    title: "Household Waste",
    description: "General household items and furniture.",
    icon: Home,
  },
  {
    id: "garden",
    title: "Garden Waste",
    description: "Green waste and landscaping materials.",
    icon: TreePine,
  },
  {
    id: "commercial",
    title: "Commercial Waste",
    description: "Business and office clearance.",
    icon: Briefcase,
  },
];

export const steps: Step[] = [
  { label: "Postcode", icon: MapPin, key: "postcode-data" },
  { label: "Waste Type", icon: Trash2, key: "waste-types" },
  { label: "Select Skip", icon: Truck, key: "selected-skip" },
  { label: "Permit Check", icon: Shield, key: "permit-required" },
  { label: "Choose Date", icon: Calendar, key: "chosen-date" },
  { label: "Payment", icon: CreditCard, key: "payment-method" },
];
