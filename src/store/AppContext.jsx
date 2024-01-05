import { createContext, useEffect, useState } from "react";
import { useFetchContacts } from "../hooks/useFetchContacts";
import { getUpdateDate } from "../utils/transformerFunctions";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const { contacts, date } = useFetchContacts();
  const [updatedAt, setUpdatedAt] = useState({});

  const getLastUpdated = (date) => {
    if (!date) return;

    const { getDay, getMonth, getYear, getHours, getMinutes } =
      getUpdateDate(date);

    setUpdatedAt({ getDay, getMonth, getYear, getHours, getMinutes });
  };

  useEffect(() => {
    getLastUpdated(date);
  }, [date]);

  return (
    <AppContext.Provider value={{ contacts, updatedAt }}>
      {children}
    </AppContext.Provider>
  );
};
