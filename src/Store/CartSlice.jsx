import { createSlice } from '@reduxjs/toolkit';

const initialState = JSON.parse(localStorage.getItem('cart')) || [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add(state, action) {
      const product = action.payload;
      const existingProduct = state.find(item => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity = (existingProduct.quantity || 1) + 1;
      } else {
        state.push({ ...product, quantity: 1 });
      }
      localStorage.setItem('cart', JSON.stringify(state));
    },
    remove(state, action) {
      const newState = state.filter((_, idx) => idx !== action.payload);
      localStorage.setItem('cart', JSON.stringify(newState));
      return newState;
    }
  }
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
