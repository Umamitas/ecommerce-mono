import styled from "styled-components";

export const CategoriesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 1rem;
  row-gap: 1rem;
  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
    row-gap: 0rem;
  }
`;

export const ItemDirectory = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  background-color: transparent;
  color: #000;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  margin-left: 3rem;
  margin-bottom: 3rem;

  &:hover {
    background-color: #f09d51;
    color: #fff;
  }
  @media screen and (max-width: 600px) {
    padding: 0.5rem 1rem;
    margin-bottom: 1rem;
    margin-left: 0px;
  }
`;
