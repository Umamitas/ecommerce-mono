import { useContext } from "react";
import { CartContext } from "../../../Context/Cart.context";

import {
  DropdownContainer,
  CartItemsWindow,
  CheckOut,
  ClearCart,
  DropDownFooter,
  EmptyMessage,
  CartTotal,
  TotalPrice,
} from "./Dropdown.style";

import CartItem from "../CartItems/CartItems.component";

const Dropdown = () => {
  const { cartItems, clearAllCart } = useContext(CartContext);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.fields.price * item.quantity,
    0
  );
  return (
    <DropdownContainer>
      <CartItemsWindow>
        {cartItems.length ? (
          cartItems.map((item) => (
            <CartItem key={item.sys.id} CartItem={item} />
          ))
        ) : (
          <EmptyMessage>Your Cart is empty</EmptyMessage>
        )}
      </CartItemsWindow>
      <DropDownFooter>
        <CartTotal>Total: </CartTotal>
        <TotalPrice> $ {totalPrice.toFixed(2)}</TotalPrice>
      </DropDownFooter>
      <DropDownFooter>
        <ClearCart onClick={clearAllCart}>CLEAR CART </ClearCart>
        <CheckOut>CHECKOUT</CheckOut>
      </DropDownFooter>
    </DropdownContainer>
  );
};

export default Dropdown;
