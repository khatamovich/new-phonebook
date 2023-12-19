import { createContext } from "react";

export const AppContext = createContext();

const DataProvider = ({
  children,
  value = {
    data: [],
  },
}) => {
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default DataProvider;
