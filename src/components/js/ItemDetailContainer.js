import React from "react";
import { useLocation } from "react-router-dom";
import Pedido from "./Pedido";



const ItemDetailContainer = () => {
    const {state} = useLocation();
    const itemSelecionado = state && state.itemSelecionado;

    if (!state || !state.itemSelecionado) {
        return <p>Nenhum item foi selecionado</p>;
    }

const {id, nome, preco, descricao, imagem} = itemSelecionado

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
         
       <div className="produto">
           <div className="produto-imagem">
           <img src={imagem} alt={nome} style={{ width: '300px', height: '300px' }}></img>
       </div> 
       <div className="produto-descricao">
           <h2>{nome}</h2>
           <p>ID: {id}</p>
           <p>Preço: {preco}</p>
           <p>Descrição: {descricao}</p>
            <Pedido stockItens={10} initialValue={0} nomeProd={nome} idProd={id} precoProd={preco} descricaoProd={descricao}/>
       </div>
     </div> 
     </div>
    
    );


};
export default ItemDetailContainer;