import { useState, useEffect } from "react";

export const usePagination = (data = [], itemsPerPage, selectedLocation) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const [paginatedData, setPaginatedData] = useState([]);

  useEffect(() => {
    if (selectedLocation) {
      setTotalPages(
        Math.ceil(
          data.filter((i) => i.region === selectedLocation).length /
            itemsPerPage
        )
      );
      setPaginatedData(
        data
          .filter((i) => i.region === selectedLocation)
          .slice(startIndex, endIndex)
      );
      return;
    }

    setTotalPages(Math.ceil(data.length / itemsPerPage));
    setPaginatedData(data.slice(startIndex, endIndex));

    return () => setPaginatedData([]);
  }, [currentPage, itemsPerPage, data.length, selectedLocation]);

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 100);
  };

  return {
    totalPages,
    paginatedData,
    handlePageChange,
    setCurrentPage,
    currentPage,
  };
};
