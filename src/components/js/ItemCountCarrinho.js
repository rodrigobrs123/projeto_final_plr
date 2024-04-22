import React, { useState } from "react";

function ItemCountCarrinho({ initial, onAdd, handleDecrement }) {
  const [count, setCount] = useState(initial);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleAddToCart = () => {
    onAdd(count);
  };

  const handleDecrementClick = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
      handleDecrement(); // Call handleDecrement function passed as prop
    }
  };

  return (
    <div className="item">
      <button onClick={handleAddToCart}>Remover</button>
      <button onClick={handleIncrement}>Adicionar</button>
    </div>
  );
}

// Define default props
ItemCountCarrinho.defaultProps = {
  onAdd: () => {
    console.warn("onAdd function is not provided");
  },
  handleDecrement: () => {
    console.warn("handleDecrement function is not provided");
  },
  initial: 1,
};

export default ItemCountCarrinho;
