import { createContext, useState } from "react";

type AppProviderState = {
  count: number;
  setCount: (count: number) => void;
};

const initialState: AppProviderState = {
  count: 0,
  setCount: () => null,
};

export const AppContext = createContext<AppProviderState>(initialState);

type Props = {
  children: React.ReactNode;
};
export const AppProvider = ({ children }: Props) => {
  const [count, setCount] = useState(0);
  return (
    <AppContext.Provider value={{ count, setCount }}>
      {children}
    </AppContext.Provider>
  );
};
