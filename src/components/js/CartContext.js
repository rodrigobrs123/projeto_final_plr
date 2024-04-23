// CartContext.js
import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();


// In CartProvider.js
export const CartProvider = ({ children }) => {
   const [cartItems, setCartItems] = useState([]);

   const addItem = (item) => {
      setCartItems([...cartItems, item]);
   };

   const removeItem = (itemId) => {
      setCartItems(cartItems.filter((item) => item.idProd !== itemId));
   };

   const clear = () => {
      setCartItems([]);
   };

   const isInCart = (itemId) => {
      return cartItems.some((item) => item.idProd === itemId);
   };

   return (
      <CartContext.Provider value={{ cartItems, addItem, removeItem, clear, isInCart }}>
         {children}
      </CartContext.Provider>
   );
};

export const useCart = () => {
   const context = useContext(CartContext);
   if (!context) {
      throw new Error('useCart must be used within a CartProvider');
   }
   return context;
};

export default CartContext;
