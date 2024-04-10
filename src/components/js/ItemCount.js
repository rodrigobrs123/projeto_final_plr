import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function ItemCount({stock, initial, onAdd}){

    const [count, setCount] = useState(initial);




    const aumentar = () => {

      //  console.log('Entrou no aumentar', count);

        if(count < stock){
            setCount(count + 1);
            
      console.log('Entrou no aumentar', count);
        }
    };

    const diminuir = () => {

        if(count > 0){
            setCount(count -1);
            
      console.log('Entrou no diminuir', count);
        }

    };


   const handleAdd = () => {
       console.log('Entrou no handleAdd');
        onAdd(count);
    };

    return (
        <div className="item">
           <span>{count}</span>
           <button onClick={diminuir}>-</button>
           <button onClick={handleAdd}>Adicionar ao carrinho</button>
           <button onClick={aumentar}>+</button>
       
        </div>
    );

}




// Define default props
ItemCount.defaultProps = {
    onAdd: () => {
        console.warn('onAdd function is not provided');
    }
};


export default ItemCount;