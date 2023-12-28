import ReactPaginate from "react-paginate";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Pagination = ({
  handlePageChange,
  totalPages,
  pageRangeDisplayed = 0,
  previouseLabel,
  nextLabel,
  breakLabel = "",
  ...props
}) => {
  return (
    <ReactPaginate
      {...props}
      breakLabel={breakLabel}
      previousLabel={previouseLabel ? <previouseLabel /> : <IoIosArrowBack />}
      nextLabel={nextLabel ? <nextLabel /> : <IoIosArrowForward />}
      onPageChange={handlePageChange}
      pageRangeDisplayed={pageRangeDisplayed}
      pageCount={totalPages}
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
