import React, { useState } from "react";

function ItemCount({ initial, onAdd, handleDecrement }) {
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
      <span>{count}</span>
      <button onClick={handleDecrementClick}>-</button>
      <button onClick={handleAddToCart}>Adicionar ao carrinho</button>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}

// Define default props
ItemCount.defaultProps = {
  onAdd: () => {
    console.warn("onAdd function is not provided");
  },
  handleDecrement: () => {
    console.warn("handleDecrement function is not provided");
  },
  initial: 1,
};

export default ItemCount;
