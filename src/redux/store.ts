import { configureStore, createReducer, createAction } from '@reduxjs/toolkit';

const initialState: { products: Props.Product[]; cart: Props.Product[] } = {
  products: [
    { name: 'Apple Watch', price: 199, quantity: 5 },
    { name: 'iPhone', price: 999, quantity: 20 },
    { name: 'iPad', price: 499, quantity: 10 },
    { name: 'MacBook', price: 599, quantity: 15 },
  ],
  cart: [],
};

export const addToCart = createAction<Props.Product>('addToCart');
export const removeFromCart = createAction<Props.Product>('removeFromCart');
export const clearCart = createAction('clearCart');

const dataOfShopReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addToCart, (state, action) => {
      const productIndex = state.products.findIndex(
        (product) => product.name === action.payload.name
      );
      if (state.products[productIndex].quantity === 0) {
        return state;
      }
      state.products[productIndex].quantity--;
      const productToPush = state.products[productIndex];
      const productInCartIndex = state.cart.findIndex(
        (product) => product.name === action.payload.name
      );
      if (productInCartIndex < 0) {
        state.cart.push({
          name: productToPush.name,
          price: productToPush.price,
          quantity: 1,
        });
      } else {
        state.cart[productInCartIndex].quantity++;
      }
    })
    .addCase(removeFromCart, (state, action) => {
      const productInCartIndex = state.cart.findIndex(
        (product) => product.name === action.payload.name
      );
      state.cart[productInCartIndex].quantity--;
      if (state.cart[productInCartIndex].quantity === 0) {
        state.cart.splice(productInCartIndex, 1);
      }
      const productIndex = state.products.findIndex(
        (product) => product.name === action.payload.name
      );
      state.products[productIndex].quantity++;
    })
    .addCase(clearCart, (state, action) => {
      state.cart = [];
    });
});

export const store = configureStore({ reducer: dataOfShopReducer });
