import React, { useContext } from "react";
import { ProductsContext } from "../../../Context/Shop.context";
import { SearchContainer, SearchIcon, SearchInput } from "./Search.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Search = () => {
  const { filterProductsBySearch } = useContext(ProductsContext);

  return (
    <SearchContainer>
      <SearchIcon>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </SearchIcon>
      <SearchInput
        type="text"
        placeholder="Item..."
        onChange={filterProductsBySearch}
      />
    </SearchContainer>
  );
};

export default Search;
