import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import bola from '../../images/bola.jpg';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATetDLqgc3sXXSEqsFPYA67QZFNgNp4no",
  authDomain: "projeto-final-plr.firebaseapp.com",
  projectId: "projeto-final-plr",
  storageBucket: "projeto-final-plr.appspot.com",
  messagingSenderId: "404136441252",
  appId: "1:404136441252:web:c1c9cc7fdf54d60e1c7d31",
  measurementId: "G-Z9FCCSTQHQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'projeto_final'));
        const fetchedData = querySnapshot.docs.map(doc => doc.data());
        setData(fetchedData);
        setLoading(false);
        console.log("Dados Firebase", fetchedData)
      } catch (error) {
        console.error("Error fetching Firebase data:", error);
        setLoading(false);
      }
    };

    fetchData();

    getItem().then(data => {
      setItems(data);
    });
  }, [db]);

  const getItem = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const items = [
        
        ];
        resolve(items);
      }, 2000);
    });
  };

  const handleDetalhesClick = (itemId) => {
    const itemData = data.find(item => item.item.id === itemId);
    if (itemData) {
      console.log("Clicou no botao!!!", itemId);
      navigate(`/item/${itemId}`, { state: { itemSelecionado: itemData.item } });
    } else {
      console.log("Item not found!");
    }
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul style={{ display: 'flex', flexWrap: 'wrap', listStyle: 'none', padding: 0 }}>
          {[...items, ...data.map(itemData => itemData.item)].map((item, index) => (
            <React.Fragment key={index}>
              <li style={{ marginRight: '20px', marginBottom: '20px' }}>
                <div onClick={() => handleDetalhesClick(item.id)}>
                  <img src={item.imagem} alt={item.nome} style={{ width: '150px', height: '150px' }} />
                </div>
                <h3>{item.nome}</h3>
                <p>{item.preco}</p>
                <p>{item.descricao}</p>
                <button onClick={() => handleDetalhesClick(item.id)}>Detalhes Produto</button>
              </li>
              {(index !== 0 && (index + 1) % 6 === 0) && <br />}
            </React.Fragment>
          ))}
        </ul>
      )}

      <h1>Dados Firebase</h1>
      <ul>
        {data.map((itemData, index) => (
          <li key={index}>
            <p>ID: {itemData.item.id}</p>
            <p>Nome: {itemData.item.nome}</p>
            <p>Descrição: {itemData.item.descricao}</p>
            <p>Preço: {itemData.item.preco}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemListContainer;