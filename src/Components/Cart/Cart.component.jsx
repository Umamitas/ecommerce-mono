import { useContext } from "react";
import { CartContext } from "../../Context/Cart.context";
import { CartIconContainer, Icon, ItemCount, TotalPrice } from "./Cart.style";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Cart = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <Icon>
        <FontAwesomeIcon icon={faCartShopping} /> <ItemCount>0</ItemCount> items
        - <TotalPrice></TotalPrice>
      </Icon>
    </CartIconContainer>
  );
};
export default Cart;
