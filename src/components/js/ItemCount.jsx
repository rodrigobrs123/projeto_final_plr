import React, { useState } from "react";

function ItemCount({ stock, initial, onAdd }) {
    const [count, setCount] = useState(initial);

    const handleIncrement = () => {
        if (count < stock) {
            setCount(prevCount => prevCount + 1);
        }
    };

    const handleDecrement = () => {
        if (count > 1) {
            setCount(prevCount => prevCount - 1);
        }
    };

    const handleAddToCart = () => {
        onAdd(count);
    };

    return (
        <div className="item">
            <span>{count}</span>
            <button onClick={handleDecrement}>-</button>
            <button onClick={handleAddToCart}>Adicionar ao carrinho</button>
            <button onClick={handleIncrement}>+</button>
        </div>
    );
}

// Define default props
ItemCount.defaultProps = {
    onAdd: () => {
        console.warn('onAdd function is not provided');
    },
    initial: 1,
    stock: 10 
};

export default ItemCount;
