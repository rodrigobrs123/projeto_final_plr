import React, { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import ItemCount from "./ItemCount";

const ItemDetailContainer = () => {
    const { state } = useLocation();
    const itemSelecionado = state && state.itemSelecionado;
    const history = useHistory();

    const [quantidadeSelecionada, setQuantidadeSelecionada] = useState(0);

    if (!state || !state.itemSelecionado) {
        return <p>Nenhum item foi selecionado</p>;
    }

    const { id, nome, preco, descricao, imagem } = itemSelecionado;

    const handleAdd = (quantidade) => {
        setQuantidadeSelecionada(quantidade);
    };

    const handleFinalizarCompra = () => {
        history.push("/cart");
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", height: "100vh" }}>
            <div className="produto">
                <div className="produto-imagem">
                    <img src={imagem} alt={nome} style={{ width: '300px', height: '300px' }}></img>
                </div>
                <div className="produto-descricao">
                    <h2>{nome}</h2>
                    <p>ID: {id}</p>
                    <p>Preço: {preco}</p>
                    <p>Descrição: {descricao}</p>
                </div>
            </div>
            {quantidadeSelecionada === 0 ? (
                <ItemCount onAdd={handleAdd} stock={10} initial={1} />
            ) : (
                <button onClick={handleFinalizarCompra}>Finalizar Compra</button>
            )}
        </div>
    );
};

export default ItemDetailContainer;
