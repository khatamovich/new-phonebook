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

const Search = ({ filter, admin }) => {
  const { contacts } = useContext(AppContext);
  const { result, handleSearch } = useSearch(contacts);

  return (
    <StyledSearch>
      <Form>
        <Field>
          <SearchIcon>
            <FaSearch />
          </SearchIcon>

          <input
            onChange={(event) => handleSearch(event.currentTarget.value)}
            type="search"
            placeholder="F.I.Sh | ichki raqam | bo'lim"
          />
        </Field>

        {!filter && (
          <Filter>
            <Dropdown>
              <IoIosArrowDown />

              <select>
                <option value="">Toshkent sh.</option>
              </select>
            </Dropdown>
          </Filter>
        )}
      </Form>

      <Result>
        {result.map((contact, key) => {
          return <Card key={key} {...contact} />;
        })}
      </Result>
    </StyledSearch>
  );
};

export default Search;
