import React from 'react';
import { useCart } from './CartContext'; // Importação correta do hook useCart

const Cart = () => {
  const { cartItems, addItem, removeItem, clear } = useCart();

  const handleAddItem = (item) => {
    addItem(item);
  };

  const handleRemoveItem = (item) => {
    removeItem(item);
  };

  const handleClearCart = () => {
    clear();
  };

  return (
    <div>
      <h2>Carrinho de Compras</h2>
      {cartItems.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} - {item.price}
              <button onClick={() => handleRemoveItem(item)}>Remover</button>
            </li>
          ))}
        </ul>
      )}
      <button onClick={handleClearCart}>Limpar Carrinho</button>
    </div>
  );
};

export default Cart; // Exportação padrão do componente
