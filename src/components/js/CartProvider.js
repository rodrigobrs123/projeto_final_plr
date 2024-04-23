import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CartProvider } from './components/js/CartContext';
import Cart from './components/js/Cart';
import CartWidget from './components/js/CartWidget';
import ItemDetailContainer from './components/js/ItemDetailContainer';

const App = () => {
  return (
    <Router>
      <CartProvider>
        <div className="App">
          <Switch>
            <Route exact path="/" component={ItemDetailContainer} />
            <Route path="/cart" component={Cart} />
          </Switch>
          <CartWidget />
        </div>
      </CartProvider>
    </Router>
  );
};

export default App;
