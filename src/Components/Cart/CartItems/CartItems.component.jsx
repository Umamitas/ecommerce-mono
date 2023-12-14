import { useContext } from "react";
import { CartContext } from "../../../Context/Cart.context";
import {
  RoundImage,
  BinIcon,
  CartItemsContainer,
  ItemInformations,
  ItemName,
  ItemPrice,
  ItemCount,
} from "./CartItems.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const CartItem = ({ CartItem }) => {
  const { clearItemFromCart } = useContext(CartContext);
  const clearItemHandler = () => clearItemFromCart(CartItem);

  const {
    title = CartItem.fields.title,
    price = CartItem.fields.price,
    imageUrl = CartItem.fields.image.path,
  } = CartItem;

  const { quantity } = CartItem;

  return (
    <CartItemsContainer>
      <RoundImage src={imageUrl} />
      <ItemInformations>
        <ItemName>{title.charAt(0).toUpperCase() + title.slice(1)}</ItemName>
        <ItemCount>x{quantity}</ItemCount>
        <ItemPrice>$ {price}</ItemPrice>
      </ItemInformations>
      <BinIcon onClick={clearItemHandler}>
        <FontAwesomeIcon icon={faTrash} />
      </BinIcon>
    </CartItemsContainer>
  );
};
export default CartItem;
