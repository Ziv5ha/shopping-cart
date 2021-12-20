import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartProduct from './CartProduct';
import { clearCart } from '../redux/store';

export default function ShoppingCart() {
  const dispatch = useDispatch();
  const { cart } = useSelector((state: { cart: Props.Product[] }) => state);
  const JSXCartProducts = cart.map(({ name, price, quantity }) => (
    <CartProduct key={name} name={name} price={price} quantity={quantity} />
  ));

  let total = 0;
  cart.forEach(({ price, quantity }: Props.Product) => {
    total += price * quantity;
  });
  return (
    <div className='list'>
      <h2>
        Shopping Cart <i className='fas fa-shopping-cart'></i>
      </h2>
      {JSXCartProducts.length !== 0 ? (
        JSXCartProducts
      ) : (
        <p>Please add items to your shopping cart</p>
      )}
      <p>
        Total spent: <span id='total'>{total}</span>
      </p>
      <button disabled={total <= 0} onClick={() => dispatch(clearCart())}>
        CheckOut
      </button>
    </div>
  );
}
