import { styled } from "styled-components";

export const StoreContainer = styled.div`
  padding-top: 2rem;
  padding-bottom: 3rem;
  background-color: #e9e3e3;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
`;

export const StoreTitle = styled.h2`
  font-size: 2.5rem;
`;
export const StoreOrange = styled.span`
  font-size: 3rem;
  color: #f09d51;
  letter-spacing: 6px;
  padding-left: 0.5rem;
`;
export const ProductsContainer = styled.div`
  margin: 2rem 4rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 30px;
  row-gap: 30px;
`;
