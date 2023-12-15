import styled from "styled-components";

export const SearchContainer = styled.div`
  align-items: center;
  display: flex;

  @media screen and (max-width: 600px) {
    padding: 1rem 2rem;
    width: 80%;
  }
`;

export const SearchInput = styled.input`
  display: flex;
  flex-direction: row;
  height: 1rem;
  width: 20rem;
  justify-content: center;
  padding: 1rem 1rem;
`;

export const SearchIcon = styled.span`
  display: flex;
  flex-direction: row;
  height: 1rem;
  width: 1rem;
  justify-content: center;
  padding: 1.1rem 1.1rem;
  font-weight: bold;
  background-color: #f09d51;
`;
