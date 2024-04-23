// CartWidget.js
import React from 'react';
import { RiShoppingCartLine } from 'react-icons/ri';
import { useCart } from './CartContext';

const CartWidget = () => {
  const { cartItems } = useCart();

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div>
      <p>Carrinho ({getTotalItems()} itens)</p>
      <RiShoppingCartLine size={24} />
    </div>
  );
};

export default CartWidget;
