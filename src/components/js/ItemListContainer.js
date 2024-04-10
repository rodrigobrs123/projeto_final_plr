import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import bola from '../../images/bola.jpg'
import camisa from '../../images/camisa_nike.jpg'
import conjunto_01 from '../../images/conjunto_puma.jpg'
import conjunto_02 from '../../images/conjunto_puma_02.jpg'
import conjunto_03 from '../../images/conjunto_puma_03.jpg'
import jaqueta from '../../images/jaqueta_puma.jpg'
import casaco from '../../images/casaco.jpg'
import casaco_02 from '../../images/casaco_02.jpg'
import casaco_03 from '../../images/casaco_03.jpg'
import casaco_04 from '../../images/casaco_04.jpg'
import casaco_05 from '../../images/casaco_05.jpg'
import tenis from '../../images/tenis.jpg'



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
            id: 2,
            nome: "Produto 2",
            preco: 100,
            descricao: "Detalhes do produto 2",
            imagem: camisa
        },

        {
            id: 3,
            nome: "Produto 3",
            preco: 100,
            descricao: "Detalhes do produto 3",
            imagem: casaco_02
        },

        {
            id: 4,
            nome: "Produto 4",
            preco: 100,
            descricao: "Detalhes do produto 4",
            imagem: casaco_03
        },  


        {
            id: 5,
            nome: "Produto 5",
            preco: 100,
            descricao: "Detalhes do produto 5",
            imagem: casaco_04
        },
        
        {
            id: 6,
            nome: "Produto 6",
            preco: 100,
            descricao: "Detalhes do produto 6",
            imagem: casaco_05
        },
        
        {
            id: 7,
            nome: "Produto 7",
            preco: 100,
            descricao: "Detalhes do produto 7",
            imagem: casaco
        },
        
        {
            id: 8,
            nome: "Produto 8",
            preco: 100,
            descricao: "Detalhes do produto 8",
            imagem: conjunto_01
        },
        
        {
            id: 9,
            nome: "Produto 9",
            preco: 100,
            descricao: "Detalhes do produto 9",
            imagem: conjunto_02
        },
        
        {
            id: 10,
            nome: "Produto 10",
            preco: 100,
            descricao: "Detalhes do produto 10",
            imagem: conjunto_03
        },

        {
            id: 11,
            nome: "Produto 11",
            preco: 100,
            descricao: "Detalhes do produto 11",
            imagem: jaqueta
        },
        {
            id: 12,
            nome: "Produto 12",
            preco: 100,
            descricao: "Detalhes do produto 12",
            imagem: tenis
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
        const itemIndex = itens.findIndex(item => item.id === itemId);
        if(itemIndex !== -1) { // Checa se o item não foi encontrado
            const itemSelecionado = itens[itemIndex];
            console.log("Clicou no botao!!!", itemId);
            navigate(`/item/${itemId}`, { state: {itemSelecionado}});
        } else {
            console.log("Item not found!");
        }
    };
    


    return (
        <div>
            {loading?(
                <p>Loading...</p>
            ) : ( 
                <ul style={{ display: 'flex', flexWrap: 'wrap', listStyle: 'none', padding: 0 }}>
                  {itens.map((item,index) => (
                  <React.Fragment key={item.id}>
                   <li style={{ marginRight: '20px', marginBottom: '20px' }}>
                   <div onClick={() => handleDetalhesClick(item.id)}>
                    <img src={item.imagem} alt={item.nome} style={{ width: '150px', height: '150px' }} /> 
                   </div>
                   <h3>{item.nome}</h3>
                   <p>{item.preco}</p> 
                   <p>{item.descricao}</p>
                   <button onClick={() => handleDetalhesClick(item.id)}>Detalhes Produto</button>  
                   </li>
                   {(index + 1) % 6 === 0 && <br/>} {/* Insert line break after every 6 items */}
                   </React.Fragment>
                ))}   
               </ul> 

            )

            }
        </div>

    );

}

export default ItemListContainer;