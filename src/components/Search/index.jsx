import {
  StyledSearch,
  Form,
  Field,
  SearchIcon,
  Filter,
  Dropdown,
  Location,
  Result,
} from "./Search.styled";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import Card from "../Card";
import { AppContext } from "../../store/AppContext";
import { useContext, useEffect, useState } from "react";
import { useSearch } from "../../hooks/useSearch";
import { usePagination } from "../../hooks/usePagination";
import Pagination from "../Pagination";
import { useLocationDropdown } from "../../hooks/useLocationDropdown";

const Search = () => {
  const { contacts } = useContext(AppContext);
  // Dropdown hook
  const [selectedLocation, setSelectedLocation] = useState(
    localStorage.getItem("region") || ""
  );
  const { active, toggle, close } = useLocationDropdown();
  const { result, handleSearch } = useSearch(contacts);
  const {
    paginatedData,
    totalPages,
    currentPage,
    handlePageChange,
    setCurrentPage,
  } = usePagination(result, 5, selectedLocation);

  const handleUpdateLocation = (e) => {
    setSelectedLocation(e.currentTarget.dataset.key);
    localStorage.setItem("region", e.currentTarget.dataset.key);
  };

  const handleClickOutside = (event) => {
    if (event.target.nodeName !== "LI") {
      close();
    }
  };

  useEffect(() => {
    if (active === true) {
      window.addEventListener("click", handleClickOutside);
    }

    return () => window.removeEventListener("click", handleClickOutside);
  }, [active]);

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
            placeholder="F.I.Sh | ichki raqam | boshqarma | bo'lim"
          />
        </Field>

        <Dropdown className={active ? "active" : ""}>
          <li data-key={""} onClick={handleUpdateLocation}>
            O'zbekiston bo'ylab
          </li>
          <li data-key={"Toshkent sh."} onClick={handleUpdateLocation}>
            Toshkent sh.
          </li>
          <li data-key={"Toshkent. v."} onClick={handleUpdateLocation}>
            Toshkent v.
          </li>
          <li data-key={"Andijon v."} onClick={handleUpdateLocation}>
            Andijon v.
          </li>
          <li data-key={"Buxoro v."} onClick={handleUpdateLocation}>
            Buxoro v.
          </li>
          <li data-key={"Jizzah v."} onClick={handleUpdateLocation}>
            Jizzah v.
          </li>
          <li data-key={"Qashqadaryo v."} onClick={handleUpdateLocation}>
            Qashqadaryo v.
          </li>
          <li data-key={"Navoiy v."} onClick={handleUpdateLocation}>
            Navoiy v.
          </li>
          <li data-key={"Namangan v."} onClick={handleUpdateLocation}>
            Namangan v.
          </li>
          <li data-key={"Samarqand v."} onClick={handleUpdateLocation}>
            Samarqand v.
          </li>
          <li data-key={"Surxondaryo v."} onClick={handleUpdateLocation}>
            Surxondaryo v.
          </li>
          <li data-key={"Sirdaryo v."} onClick={handleUpdateLocation}>
            Sirdaryo v.
          </li>
          <li data-key={"Farg'ona v."} onClick={handleUpdateLocation}>
            Farg'ona v.
          </li>
          <li data-key={"Xorazm v."} onClick={handleUpdateLocation}>
            Xorazm v.
          </li>
          <li data-key={"Qoraqalpog'iston v."} onClick={handleUpdateLocation}>
            Qoraqalpog'iston v.
          </li>
        </Dropdown>
      </Form>

      <Filter>
        <p className="support">
          Texnik yordam: <b>01-755</b>
        </p>

        <Location
          onClick={(e) => {
            toggle();
            e.stopPropagation();
          }}
        >
          {selectedLocation || "🇺🇿"}
          <IoIosArrowDown />
        </Location>
      </Filter>

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
