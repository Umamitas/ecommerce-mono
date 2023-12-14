import React from "react";
import { SearchContainer, SearchIcon, SearchInput } from "./Search.style";

const Search = () => {
  return (
    <SearchContainer>
      <SearchIcon>logo</SearchIcon>
      <SearchInput type="text" placeholder="Search products..." />
    </SearchContainer>
  );
};

export default Search;
