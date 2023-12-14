import { useContext } from "react";
import { CartContext } from "../../Context/Cart.context";
import { CartIconContainer, Icon, ItemCount, TotalPrice } from "./Cart.style";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Cart = () => {
  const { isCartOpen, setIsCartOpen, cartItems } = useContext(CartContext);

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.fields.price * item.quantity,
    0
  );

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <Icon>
        <FontAwesomeIcon icon={faCartShopping} />
        <ItemCount>{totalQuantity}</ItemCount> items -
        <TotalPrice>$ {totalPrice.toFixed(2)}</TotalPrice>
      </Icon>
    </CartIconContainer>
  );
};
export default Cart;
