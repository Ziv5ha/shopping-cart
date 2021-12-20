import React from 'react';
import Product from './Product';
import { useSelector } from 'react-redux';

export default function ProductList() {
  const { products } = useSelector(
    (state: { products: Props.Product[] }) => state
  );
  const JSXproducts = products.map(({ name, price, quantity }) => (
    <Product key={name} name={name} price={price} quantity={quantity} />
  ));

  return (
    <div className='list'>
      <h2>
        Shopping List <i className='fas fa-store'></i>
      </h2>
      {JSXproducts}
    </div>
  );
}
