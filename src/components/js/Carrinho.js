import React from "react";
import { useCart } from "./CartContext";

const Carrinho = () => {
   const { cartItems } = useCart(); // Destructure cartItems from useCart()
   const uniqueItems = Array.from(new Set(cartItems.map(item => JSON.stringify(item)))).map(item => JSON.parse(item));

   return (
      <div>
         {uniqueItems.map((item, index) => (
            <div key={index} className="descricao">
               <h2>Nome do Produto: {item.nomeProd}</h2>
               <p>ID: {item.idProd}</p>
               <p>Preço: {item.precoProd}</p>
               <p>Descrição: {item.descricaoProd}</p>
               <p>Quantidade de Produtos: {item.initialValue}</p>
            </div>
         ))}
      </div>
   );
};

export default Carrinho;
