import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import ItemListContainer from './components/js/ItemListContainer';
import ItemDetailContainer from './components/js/ItemDetailContainer';
import NavbarBootstrap from './components/js/NavBarBS';
import { Nav } from 'react-bootstrap';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">
          <h1>Loja de Esportes Paulo Rodrigo Luiz</h1>
        </Link>
        <br/><br/>
        <NavbarBootstrap></NavbarBootstrap>
        <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/category/:id" element={<ItemListContainer/>} />
          <Route path="/item/:id" element={<ItemDetailContainer/>} />
        </Routes>

     <div className="container">
      <h1 className="mt-5">Hello, Bootstrap!</h1>
      <button className="btn btn-primary">Click me</button>
    </div>
        
      </div>
    </BrowserRouter>
  );
} 

function Navigation() {
  const location = useLocation();

  // Check if the current route is not "/teste"
  if (location.pathname !== "/") {
    return (
      <NavbarBootstrap></NavbarBootstrap>

      );
  }
  return null; // Return null if current route is "/teste"
}

export default App;
