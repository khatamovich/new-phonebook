import { useState } from "react";
import {
  searchByName,
  searchByPhone,
  searchByGovernance,
  searchBySeparation,
} from "../utils/searchFunctions";

export const useSearch = (data = []) => {
  const [result, setResult] = useState([]);

  const handleSearch = (searchTerm, setCurrentPage) => {
    if (!searchTerm || searchTerm.length < 2) {
      setResult([]);
      setCurrentPage(0);
      return;
    }

    const filteredData = data?.filter(
      (item) =>
        searchByName(item, searchTerm) ||
        searchByPhone(item, searchTerm) ||
        searchBySeparation(item, searchTerm) ||
        searchByGovernance(item, searchTerm)
    );

    setResult(filteredData);
  };

  return { result, handleSearch };
};
