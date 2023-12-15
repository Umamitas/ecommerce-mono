import styled from "styled-components";

export const CartItemsContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;

export const RoundImage = styled.img`
  display: flex;
  align-items: center;
  height: 60px;
  width: 60px;
  border-radius: 90%;
  margin-top: 15px;
  object-fit: cover;
`;
export const ItemInformations = styled.div`
  flex: 40%;
  display: flex;
  flex-direction: column;
  text-align: center;
`;
export const ItemName = styled.h2`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 0;
  padding-top: 0.5rem;
`;
export const ItemPrice = styled.p`
  font-size: 12px;
  font-weight: normal;
  margin-top: 2px;
`;
export const ItemCount = styled.span`
  font-size: 12px;
  font-weight: normal;
`;

export const BinIcon = styled.span`
  display: flex;
  justify-content: flex-end;
  padding: 30px 10px 10px 10px;
  color: #dd6478;
`;
