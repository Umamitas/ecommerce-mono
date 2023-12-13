import styled from "styled-components";

export const ProductCard = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  height: auto;
  overflow: hidden;
`;

export const CardImg = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  position: relative;
  &:hover {
    transform: scale(1.1);
    transition: transform 1s;
  }
`;

export const CartIconImage = styled.span`
  position: absolute;
  right: 0;
  width: 40px;
  height: 40px;
  background-color: #f09d51;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: 10px;
  &:hover {
    color: white;
  }
`;

export const ProductFooter = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  padding-top: 1rem;
`;

export const ProductName = styled.span`
  flex: 80%;
  display: flex;
  padding-left: 10px;
  height: 2.5rem;
  font-weight: bold;
  font-size: 1rem;
`;

export const ProductPrice = styled.span`
  flex: 20%;
  display: flex;
  justify-content: flex-end;
  padding-right: 10px;
  height: 2.5rem;
`;
