import {
  StyledSearch,
  Form,
  Field,
  SearchIcon,
  Filter,
  Dropdown,
  Result,
} from "./Search.styled";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import Card from "../Card";
import { AppContext } from "../../store/AppContext";
import { useContext } from "react";
import { useSearch } from "../../hooks/useSearch";
import { usePagination } from "../../hooks/usePagination";
import Pagination from "../Pagination";

const Search = () => {
  const { contacts } = useContext(AppContext);
  const { result, handleSearch } = useSearch(contacts);
  const {
    paginatedData,
    totalPages,
    currentPage,
    handlePageChange,
    setCurrentPage,
  } = usePagination(result, 5);

  return (
    <StyledSearch>
      <Form onSubmit={(event) => event.preventDefault()}>
        <Field>
          <SearchIcon>
            <FaSearch />
          </SearchIcon>

          <input
            onChange={(event) => {
              handleSearch(event.currentTarget.value, setCurrentPage);
            }}
            type="search"
            placeholder="F.I.Sh | ichki raqam | bo'lim"
          />
        </Field>

        {/* <Filter>
          <Dropdown>
            <IoIosArrowDown />

            <select>
              <option value="">Toshkent sh.</option>
            </select>
          </Dropdown>
        </Filter> */}
      </Form>

      <Result>
        {paginatedData.map((contact, key) => {
          return <Card key={key} {...contact} />;
        })}
      </Result>

      {totalPages > 1 && (
        <Pagination
          activeClassName="active-page"
          containerClassName="search-pagination"
          totalPages={totalPages}
          forcePage={currentPage}
          handlePageChange={handlePageChange}
        />
      )}
    </StyledSearch>
  );
};

export default Search;
