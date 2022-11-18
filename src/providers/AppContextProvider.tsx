import axios from "axios";
import * as React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export interface AppContextType {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  apiKey: string;
  setApiKey: React.Dispatch<React.SetStateAction<string>>;
  saveApiKey: (value: string) => void;
  resetApiKey: () => void;
}

export const AppContextDefaultValue: AppContextType = {
  show: false,
  setShow: () => null,
  apiKey: "",
  saveApiKey: () => null,
  setApiKey: () => null,
  resetApiKey: () => null,
};

export const AppContext = React.createContext<AppContextType>(
  AppContextDefaultValue
);

const defaultApiKey = "DEMO_KEY";

/**
 * Provide a global context for modal management.
 *
 * @param param0 Children components
 * @returns Context Provider and children components
 */
export function AppContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // Modal
  let [show, setShow] = React.useState<boolean>(false);

  // API key for the NASA API, default key restric to 1000 requests per hour
  let [apiKey, setApiKey] = React.useState<string>(defaultApiKey);

  const [storedValue, setValue] = useLocalStorage("api-key", defaultApiKey);

  // Update the context on localstorage change
  React.useEffect(() => {
    console.log("localstorage change", storedValue);
    setApiKey(storedValue);
  }, [storedValue]);

  const saveApiKey = (value: string) => {
    console.log("context change change", apiKey);
    setValue(value);
  };

  const resetApiKey = () => {
    setValue(defaultApiKey);
  };

  return (
    <AppContext.Provider
      value={{
        show,
        setShow,
        apiKey,
        setApiKey,
        saveApiKey,
        resetApiKey,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => {};
