// In CartProvider.js
import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItem = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeItem = (item) => {
    setCartItems(cartItems.filter((i) => i !== item));
  };

  const clear = () => {
    setCartItems([]);
  };

  const isInCart = (item) => {
    return cartItems.includes(item);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addItem, removeItem, clear, isInCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export function useCart () {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }

  console.log("CONTEXTO: ", context);

  return context;
};

export default CartContext;
