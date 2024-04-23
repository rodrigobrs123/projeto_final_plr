// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavbarBootstrap from './components/js/NavBarBS';
import ItemListContainer from './components/js/ItemListContainer';
import ItemDetailContainer from './components/js/ItemDetailContainer';
import Carrinho from './components/js/Carrinho';
import { CartProvider } from './components/js/CartContext.js';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <NavbarBootstrap/>
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:id" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/meus_pedidos" element={<ItemListContainer />} />
            <Route path="/cart" element={<Carrinho />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;


/*function Navigation() {
  const location = useLocation();

  // Check if the current route is not "/teste"
  if (location.pathname !== "/") {
    return (
      <NavbarBootstrap></NavbarBootstrap>

      );
  }
  return null; // Return null if current route is "/teste"
}*/


