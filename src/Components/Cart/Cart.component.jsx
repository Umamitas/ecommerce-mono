import "./Cart.style";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Cart = () => {
  return (
    <>
      <div>
        <FontAwesomeIcon icon={faCartShopping}/> 1 items- $5.00
      </div>
    </>
  );
};
export default Cart;
