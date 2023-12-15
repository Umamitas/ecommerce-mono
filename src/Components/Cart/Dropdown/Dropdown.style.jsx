import styled from "styled-components";

export const DropdownContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 240px;
  height: auto;
  flex-direction: column;
  padding: 0px 20px 20px 20px;
  background-color: rgba(255, 255, 255, 0.8);
  top: 80px;
  z-index: 2;
`;

export const EmptyMessage = styled.p`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItemsWindow = styled.div`
  height: 10rem;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

/* footer section */

export const DropDownFooter = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  gap: 10px;
`;

export const CartTotal = styled.p`
  display: flex;
  flex-direction: row;
  margin-top: 5px;
  width: 50%;
  justify-content: center;
  padding: 10px 5px;
`;

export const TotalPrice = styled.p`
  display: inline;
  margin-top: 5px;
  width: 50%;
  justify-content: end;
  padding: 10px 5px;
  font-weight: bold;
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
  padding: 10px 5px;
  border-radius: 5px;
  background-color: transparent;
  color: #f09d51;
  border-color: #f09d51;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: #f09d51;
    color: #fff;
  }
`;
