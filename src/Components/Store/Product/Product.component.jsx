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

const Product = ({ product }) => {
  const {
    title = product.fields.title,
    price = product.fields.price,
    imageUrl = product.fields.image.path,
  } = product;

  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => {
    alert('Item added to the cart!')
    addItemToCart(product);
  };
  //to make it more readable i'll avoid using a long function inside "onClick"

  return (
    <ProductCard>
      <CardImg src={imageUrl} alt={`${title}`} />

      <CartIconImage onClick={addProductToCart}>
        
        <FontAwesomeIcon icon={faCartShopping} />
      </CartIconImage>

      <ProductFooter>
        <ProductName>
          {title.charAt(0).toUpperCase() + title.slice(1)}
          <ProductPrice>${price}</ProductPrice>
        </ProductName>
      </ProductFooter>
    </ProductCard>
  );
};

export default Product;
