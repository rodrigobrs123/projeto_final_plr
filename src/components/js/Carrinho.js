import React, { useEffect } from "react";
import { useCart } from "./CartContext";
import { useNavigate } from "react-router-dom";
import ItemCountCarrinho from "./ItemCountCarrinho";
import { getFirestore, collection, addDoc } from "firebase/firestore"; // Import Firestore functions from Firebase

const Carrinho = () => {
  const { removeItem, cartItems, setCartItems } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    // Check if all items have initialValue === 0
    const allItemsZero = cartItems.every((item) => item.initialValue === 0);

    if (allItemsZero) {
      // Redirect to home page if all items have initialValue === 0
      navigate("/");
    }
  }, [cartItems, navigate]);

  const handleRemoveItem = (item) => {
    if (item.initialValue > 0) {
      const updatedCartItems = cartItems.map((cartItem) => {
        if (cartItem.idProd === item.idProd) {
          return {
            ...cartItem,
            initialValue: cartItem.initialValue - 1,
          };
        }
        return cartItem;
      });

      setCartItems(updatedCartItems);
    } else {
      removeItem(item);
    }
  };

  const handleDecrement = (item) => {
    removeItem(item);
  };

  const handleToFinalizarCompra = async () => {
    try {
      // Save cartItems to Firestore
      const db = getFirestore();
      const cartItemsCollection = collection(db, 'cartItems');
      await addDoc(cartItemsCollection, { items: cartItems });

      // Navigate to finalizarcompra page
      navigate("/finalizarcompra");
    } catch (error) {
      console.error("Error saving cart items to Firestore: ", error);
    }
  };

  return (
    <div>
      {cartItems.map((item, index) => (
        <div key={index} className="descricao">
          <h2>Nome do Produto: {item.nomeProd}</h2>
          <p>ID: {item.idProd}</p>
          <p>Preço Total: {item.precoProd * item.initialValue}</p>
          <p>Descrição: {item.descricaoProd}</p>
          <p>Quantidade de Produtos: {item.initialValue}</p>
          <ItemCountCarrinho
            initial={item.initialValue}
            onAdd={() => handleRemoveItem(item)}
            handleDecrement={() => handleDecrement(item)}
          />
        </div>
      ))}
      <button onClick={handleToFinalizarCompra}>Finalizar Compra</button>
    </div>
  );
};

export default Carrinho;
