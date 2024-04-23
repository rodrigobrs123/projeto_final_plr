import React from "react";
import { useCart } from "./CartContext";

const Carrinho = () => {
   const { cartItems, removeItem, clear } = useCart(); // Destructure removeItem e clear do useCart()

   const handleRemoveItem = (itemId) => {
      removeItem(itemId);
   };

   const handleClearCart = () => {
      clear();
   };

   return (
      <div>
         {cartItems.map((item, index) => (
            <div key={index} className="descricao">
               <h2>Nome do Produto: {item.nomeProd}</h2>
               <p>ID: {item.idProd}</p>
               <p>Preço: {item.precoProd}</p>
               <p>Descrição: {item.descricaoProd}</p>
               <p>Quantidade de Produtos: {item.initialValue}</p>
               <button onClick={() => handleRemoveItem(item.idProd)}>Remover Item</button>
            </div>
         ))}
         <button onClick={handleClearCart}>Limpar Carrinho</button>
      </div>
   );
};

export default Carrinho;



