import React from "react";
import { useState } from "react";
import ItemCount from "./ItemCount";

function Pedido({stockItens, initialValue}){

    console.log("ENTROU NO PEDIDO", stockItens,initialValue);

    const [qtdItens,setPedido] = useState(initialValue);

    const handleToPedido = (estoque,valorInicial) => {

        console.log("ENTROU NO handleToPedido", stockItens,initialValue);

        setPedido(estoque,valorInicial);
    }

    return (

        <div>
           <ItemCount stock={stockItens} initial={qtdItens} onAdd={handleToPedido}></ItemCount> 
        </div>
    );

}

export default Pedido;