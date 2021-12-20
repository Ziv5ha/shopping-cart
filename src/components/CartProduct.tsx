import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/store';
import { icons } from '../assests/iconDictionary';

export default function CartProduct({ name, price, quantity }: Props.Product) {
  const dispatch = useDispatch();
  return (
    <div>
      <p>
        {icons.hasOwnProperty(name) ? icons[name] : ''} {name} - ${price} |{' '}
        {quantity}
      </p>
      <button
        onClick={() => dispatch(removeFromCart({ name, quantity, price }))}
      >
        Remove From Cart
      </button>
    </div>
  );
}
