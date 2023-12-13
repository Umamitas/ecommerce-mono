import { useContext } from "react";
import { CartContext } from "../../../Context/Cart.context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  DropdownContainer,
  CartItemsWindow,
  BinIcon,
  CheckOut,
  ClearCart,
  DropDownFooter,
} from "./Dropdown.style";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import CartItem from "../CartItems/CartItems.component";

const Dropdown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <DropdownContainer>
      <CartItemsWindow>
        {cartItems.map((item) => (
          <CartItem
            key={item.sys.id}
            name={item.fields.title}
            price={item.fields.price}
            imageUrl={item.fields.image.path}
          />
        ))}
        <BinIcon>
          <FontAwesomeIcon icon={faTrash} />
        </BinIcon>
      </CartItemsWindow>
      <DropDownFooter>
        <ClearCart>CLEAR CART </ClearCart>
        <CheckOut>CHECKOUT</CheckOut>
      </DropDownFooter>
    </DropdownContainer>
  );
};

export default Dropdown;
