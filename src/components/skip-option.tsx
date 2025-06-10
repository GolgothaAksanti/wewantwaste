import type { SkipOptionType } from "@/types/types";
import axios, { HttpStatusCode } from "axios";
import { useEffect, useState } from "react";

import { SkipCard } from "./skip-card";

export const SkipOption = () => {
  const [data, setData] = useState<SkipOptionType[] | null>(null);
  const [selected, setSelected] = useState<SkipOptionType | null>(null);

  useEffect(() => {
    if (!data) {
      fetchSkipOptions();
    }
  }, [data]);

  const fetchSkipOptions = async () => {
    try {
      const response = await axios.get(
        `https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft`
      );

      if (response.status === HttpStatusCode.Ok) {
        setData(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="px-4 lg:px-0 lg:w-10/12 xl:w-7/12 mx-auto space-y-6">
      <p className="text-center text-2xl font-medium">Chose Your Skip Size</p>
      <p className="text-center">
        Select the skip side that best suite your needs
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {data
          ? data.map((skip) => (
              <SkipCard
                key={skip.id}
                selected={selected}
                onSelect={setSelected}
                skip={skip}
              />
            ))
          : null}
      </div>
    </div>
  );
};
