import styled from "styled-components";

export const CategoriesContainer = styled.div`
  width: 100%;
  height: 80px;
  display: inline;
  flex-direction: row;
  text-align: center;
`;

export const ItemDirectory = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  background-color: transparent;
  color: #000;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  margin-left: 40px;

  &:hover {
    background-color: #f09d51;
    color: #fff;
  }
`;
