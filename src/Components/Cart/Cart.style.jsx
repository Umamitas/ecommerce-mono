import { styled } from "styled-components";

export const CartIconContainer = styled.div`
  height: 40px;
  width: 150px;
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
export const Icon = styled.button`
  width: 150px;
  height: 40px;
  position: absolute;
`;
export const ItemCount = styled.span`
  padding-left: 0.2rem;
  font-size: 12px;
  font-weight: bold;
  bottom: 12;
`;

export const TotalPrice = styled.span``;
