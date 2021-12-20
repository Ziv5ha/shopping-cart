import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/store';
import { icons } from '../assests/iconDictionary';

export default function Product({ name, price, quantity }: Props.Product) {
  const dispatch = useDispatch();
  return (
    <div>
      <p>
        {icons.hasOwnProperty(name) ? icons[name] : ''} {name} - ${price} |{' '}
        <span id='quantity'>{quantity}</span>
      </p>
      <button onClick={() => dispatch(addToCart({ name, quantity, price }))}>
        Add To Cart
      </button>
    </div>
  );
}
