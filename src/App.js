import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import ItemListContainer from './components/js/ItemListContainer';
import ItemDetailContainer from './components/js/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
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
  if (location.pathname !== "/teste") {
    return (
      <Link to="/teste">
        ABC
      </Link>
    );
  }
  return null; // Return null if current route is "/teste"
}

export default App;
