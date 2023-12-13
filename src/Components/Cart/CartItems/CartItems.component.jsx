import {} from "./CartItems.style";

const CartItem = ({ name, quantity, price }) => {
  ;
  return (
    <div>
      <h2>{name}</h2>
      <span>{quantity}</span>
      <p>{price}</p>
    </div>
  );
};
export default CartItem;
