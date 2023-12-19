import { useState, useEffect } from "react";

export const usePagination = (data = [], itemsPerPage) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const [paginatedData, setPaginatedData] = useState([]);

  useEffect(() => {
    setTotalPages(Math.ceil(data.length / itemsPerPage));
    setPaginatedData(data.slice(startIndex, endIndex));

    return () => setPaginatedData([]);
  }, [currentPage, itemsPerPage, data.length]);

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  return {
    totalPages,
    paginatedData,
    handlePageChange,
    setCurrentPage,
    currentPage,
  };
};
