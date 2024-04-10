import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import bola from '../../images/bola.jpg'
import camisa from '../../images/camisa_nike.jpg'
import conjunto_01 from '../../images/conjunto_puma.jpg'
import conjunto_02 from '../../images/conjunto_puma_02.jpg'
import jaqueta from '../../images/jaqueta_puma.jpg'

const getItem = () =>{

return new Promise((resolve, reject) => { 
    setTimeout(() => {
        const itens = [
        {
            id: 1,
            nome: "Produto 1",
            preco: 100,
            descricao: "Detalhes do produto 1",
            imagem: bola
        },
        
        {
            id: 1,
            nome: "Produto 1",
            preco: 100,
            descricao: "Detalhes do produto 1",
            imagem: camisa
        },

        {
            id: 1,
            nome: "Produto 1",
            preco: 100,
            descricao: "Detalhes do produto 1",
            imagem: conjunto_01
        },

        {
            id: 1,
            nome: "Produto 1",
            preco: 100,
            descricao: "Detalhes do produto 1",
            imagem: conjunto_02
        },  


        {
            id: 1,
            nome: "Produto 1",
            preco: 100,
            descricao: "Detalhes do produto 1",
            imagem: jaqueta
        }  

        ];
        resolve(itens);
    }, 2000);

});

};

const ItemListContainer = () => {

    const [itens, setItens] = useState([]);
    const [loading,setLoading]= useState(true);
    const navigate = useNavigate();

    useEffect(() => {

        getItem().then(data => {
            setItens(data);
            setLoading(false);
        });

    }, []);

const handleDetalhesClick = (itemId) => {
    const itemSelecionado = itens.find(item => item.id === itemId);
    if(itemSelecionado){
        console.log("Clicou no botao!!!");
        navigate(`/item/${itemId}`, { state: {itemSelecionado}});
    }  
};


    return (
        <div>
            {loading?(
                <p>Loading...</p>
            ) : ( 
               <ul>
                {itens.map(item => (
                   <li key={item.id}>
                    <img src={item.imagem} alt={item.nome} style={{ width: '120px', height: '120px' }} /> 
                   <h3>{item.nome}</h3>
                   <p>{item.preco}</p> 
                   <p>{item.descricao}</p>
                   <button onClick={() => handleDetalhesClick(item.id)}>Detalhes Produto</button>  
                   </li>
                ))}   
               </ul> 

            )

            }
        </div>

    );

}

export default ItemListContainer;