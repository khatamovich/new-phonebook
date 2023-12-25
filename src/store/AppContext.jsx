import { createContext } from "react";
import { useFetchContacts } from "../hooks/useFetchContacts";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const { contacts } = useFetchContacts();

  return (
    <AppContext.Provider value={{ contacts }}>{children}</AppContext.Provider>
  );
};
