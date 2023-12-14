import { createContext, useState } from "react";

/*HELPER FUNCTION 'ADD' for updating the cart items.*/
const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.sys.id === productToAdd.sys.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.sys.id === productToAdd.sys.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};
/* HELPER FUNCTION 'CLEAR' to remove items from cart */
const clearCartItem = (cartItems, cartItemToClear) => {
  return cartItems.filter(
    (cartItem) => cartItem.sys.id !== cartItemToClear.sys.id
  );
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  clearItemFromCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };
  const clearItemFromCart = (cartItemToClear) => {
    setCartItems(clearCartItem(cartItems, cartItemToClear));
  };
  const clearAllCart = () => {
    setCartItems([])
  }

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    clearItemFromCart,
    clearAllCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
