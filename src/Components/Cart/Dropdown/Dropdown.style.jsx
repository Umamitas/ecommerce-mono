import styled from "styled-components";

export const DropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 0px 20px 20px 20px;
  background-color: white;
  top: 80px;
  right: 40px;
  z-index: 2;
`;

export const EmptyMessage = styled.p`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItemsWindow = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;
export const BinIcon = styled.span`
  display: flex;
  justify-content: flex-end;
  padding: 20px 20px 10px 0px;
  color: #dd6478;
`;
export const DropDownFooter = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  gap: 10px;
`;
export const ClearCart = styled.button`
  display: flex;
  flex-direction: row;
  margin-top: auto;
  width: 50%;
  justify-content: center;
  padding: 10px 5px;
  border-radius: 5px;
  background-color: transparent;
  color: #000;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: #f09d51;
    color: #fff;
  }
`;

export const CheckOut = styled.button`
  display: inline;
  margin-top: auto;
  width: 50%;
  justify-content: end;
  padding: 10px 20px;
  border-radius: 5px;
  background-color: transparent;
  color: #000;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: #f09d51;
    color: #fff;
  }
`;
