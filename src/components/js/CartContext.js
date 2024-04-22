// In CartProvider.js
import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();


// In CartProvider.js
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);


  const addItem = (item) => {
    console.log("Entrou no componente CartContext -> CartProvider -> addItem");
    const existingItem = cartItems.find((i) => i.idProd === item.idProd);


    if (existingItem) {
      // If the item already exists, update its quantity
      console.log("Entrou no IF componente CartContext -> CartProvider -> addItem", existingItem);
      setCartItems(
        cartItems.map((i) =>
          i.idProd === item.idProd ? { ...i, quantity: i.quantity + 1 } : i
        )
      );
    } else {
      // Otherwise, add the item with quantity 1
      console.log("Entrou no ELSE componente CartContext -> CartProvider -> addItem", item);
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };


  const removeItem = (item) => {
    const existingItem = cartItems.find((i) => i.idProd === item.idProd);
  
    if (existingItem) {
      if (existingItem.quantity === 1) {
        // If the quantity is 1, remove the item from the cart
        setCartItems(cartItems.filter((i) => i.idProd !== item.idProd));
      } else {
        // Otherwise, decrement the quantity
        setCartItems(
          cartItems.map((i) =>
            i.idProd === item.idProd ? { ...i, quantity: i.quantity - 1 } : i
          )
        );
      }
    }
  };
  

  const clear = () => {
    setCartItems([]);
  };

  const isInCart = (item) => {
    return cartItems.some((i) => i.idProd === item.idProd);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addItem, removeItem, clear, isInCart, setCartItems }}
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
