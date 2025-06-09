import { useState } from "react";
import axios, { HttpStatusCode } from "axios";
import { ArrowRight, Loader, Search, X } from "lucide-react";

import { AddressItem } from "./address-item";
import { type Address } from "@/types/app";

export const LandingScreen = () => {
  const [addresses, setAddresses] = useState<Address[] | null>(null);
  const [selectedAddress, setSelectedAddress] = useState<Address | null>(null);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");

  let typingTimer: ReturnType<typeof setTimeout>;

  const clearQuery = () => {
    setQuery("");
    setAddresses(null);
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
            Limit: 7,
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
    <div className="w-screen flex items-center justify-center h-screen">
      <div className="w-full  px-4 lg:px-0 lg:w-1/3 space-y-2 lg:space-y-4">
        <h1 className="text-5xl lg:text-7xl uppercase text-center">
          Skip Hire
        </h1>
        <p className=" text-lg lg:text-2xl capitalize text-center">
          with a difference
        </p>

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

            {query && (
              <button className="cursor-pointer" onClick={clearQuery}>
                <X />
              </button>
            )}
          </div>

          {selectedAddress && (
            <form action="#" className="space-y-4">
              <div className="space-y-2">
                <p>City</p>
                <input
                  type="text"
                  className="p-3 border border-zinc-800 bg-zinc-900 outline-none w-full rounded-lg"
                  value={selectedAddress.Description.split(" ")[0]}
                />
              </div>

              <div className="space-y-2">
                <p>Street Name</p>
                <input
                  type="text"
                  className="p-3 border border-zinc-800 bg-zinc-900 outline-none w-full rounded-lg"
                  value={selectedAddress.Text.split(" ")[1]}
                />
              </div>

              <div className="space-y-2">
                <p>House/Flat Number</p>
                <input
                  type="text"
                  className="p-3 border border-zinc-800 bg-zinc-900 outline-none w-full rounded-lg"
                  value={selectedAddress.Text.split(" ")[0]}
                />
              </div>
              <button className="flex bg-indigo-600 gap-4 items-center justify-center p-3 w-full rounded-lg">
                Continue <ArrowRight />
              </button>
            </form>
          )}

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
