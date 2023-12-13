import { useContext } from "react";
import { CartContext } from "../../../Context/Cart.context";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  CardImg,
  CartIconImage,
  ProductCard,
  ProductFooter,
  ProductName,
  ProductPrice,
} from "./Product.style";

const Product = ({ title, price, imageUrl, productObj }) => {
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(productObj);
  //to make it more readable i'll avoid using a long function insieme "onClick"
  return (
    <ProductCard>
      <CardImg src={imageUrl} alt={`${title}`} />

      <CartIconImage onClick={addProductToCart}>
        <FontAwesomeIcon icon={faCartShopping} />
      </CartIconImage>

      <ProductFooter>
        <ProductName>
          {title}
          <ProductPrice>${price}</ProductPrice>
        </ProductName>
      </ProductFooter>
    </ProductCard>
  );
};

export default Product;
