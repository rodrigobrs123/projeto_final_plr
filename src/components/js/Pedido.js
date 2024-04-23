import React, { useState } from "react";
import ItemCount from "./ItemCount";
import { useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";

function Pedido({ stockItens, initialValue, nomeProd, idProd, precoProd, descricaoProd }) {
    console.log("ENTROU NO PEDIDO", stockItens, initialValue, nomeProd, idProd, precoProd, descricaoProd);

    const [qtdItens, setQtdItens] = useState(initialValue); // State for quantity of items
    const navigate = useNavigate();
    const { addItem } = useCart();

    const handleToPedido = () => {
        const item = {
            stockItens,
            initialValue: qtdItens, // Update the quantity of items
            nomeProd,
            idProd,
            precoProd,
            descricaoProd
        };

        addItem(item);
        console.log("Entrou no componente Pedido -> handleToPedido", item);
        navigate("/cart");
    }

    const handleItemCountChange = (quantity) => {
        setQtdItens(quantity); // Update the quantity of items
    }

    return (
        <div>
            <ItemCount stock={stockItens} initial={qtdItens} onAdd={handleItemCountChange} />
            <button onClick={handleToPedido}>Ir para Cesta</button>
        </div>
    );
}

export default Pedido;
