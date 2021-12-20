import React from 'react';
import './App.css';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <div className='App'>
      <ProductList />
      <ShoppingCart />
    </div>
  );
}

export default App;
