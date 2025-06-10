import React, { useState } from "react";
import axios, { HttpStatusCode } from "axios";
import { Loader, Search, X } from "lucide-react";

import type { Address } from "@/types/types";
import { AddressItem } from "./address-item";
import { useStepper } from "@/hooks/use-stepper";
import { AddressForm } from "./adddress-form";

export const WasteAddress = () => {
  const [addresses, setAddresses] = useState<Address[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const { setSelectedAddress, selectedAddress } = useStepper();

  let typingTimer: ReturnType<typeof setTimeout>;

  const clearQuery = () => {
    setQuery("");
    setAddresses(null);
    setSelectedAddress(null);
  };

  const handleSelectAddress = (address: Address) => {
    setSelectedAddress(address);
    setAddresses(null);
  };

  const fetchAddresses = async (searchKey: string) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://services.postcodeanywhere.co.uk/Capture/Interactive/Find/v1.00/json3ex.ws`,
        {
          params: {
            key: "JP84-GY97-YZ96-GG45",
            Origin: "GBR",
            Countries: "GB",
            Limit: 10,
            Language: "en",
            Text: searchKey,
          },
        }
      );
      setLoading(false);
      if (response.status === HttpStatusCode.Ok) {
        setAddresses(response.data.Items);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    clearTimeout(typingTimer);

    typingTimer = setTimeout(() => {
      if (value.length > 2) {
        fetchAddresses(value);
      } else {
        setAddresses([]);
      }
    }, 300);
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="mx-auto my-20 whitespace-nowrap space-y-4 px-4 w-full md:px-0 md:w-2/3 xl:w-1/3 lg:space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl lg:text-7xl uppercase text-center">
            Skip Hire
          </h1>
          <p className=" text-base lg:text-2xl capitalize text-center">
            with a difference
          </p>
        </div>

        <div className="w-full transition-transform duration-300 space-y-2 lg:space-y-4">
          <div className="p-3 relative bg-zinc-900 border-zinc-800 flex w-full items-center gap-4 border rounded-lg">
            <Search className="text-zinc-500" />
            <input
              className="outline-none text-sm lg:text-base uppercase placeholder:capitalize w-full"
              type="text"
              value={query}
              onChange={handleChange}
              placeholder="Start typing your delivery Postcode or Address "
            />

            {loading && (
              <Loader className="animate-spin absolute z-20 right-4" />
            )}

            {selectedAddress && (
              <button className="cursor-pointer" onClick={clearQuery}>
                <X />
              </button>
            )}
          </div>

          {selectedAddress && <AddressForm />}

          {addresses && addresses?.length > 0 && (
            <div className="border rounded-lg h-[30vh] scrollable overflow-y-scroll bg-zince-900 border-zinc-800">
              {addresses.map((address, i) => (
                <AddressItem
                  address={address}
                  key={i}
                  onSelect={handleSelectAddress}
                />
              ))}
            </div>
          )}

          <p className="text-center text-zinc-600 text-sm">Version 1.1.34</p>
        </div>
      </div>
    </div>
  );
};
