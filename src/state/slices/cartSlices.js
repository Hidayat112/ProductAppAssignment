import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = state.cartItems.find(item => item.id === action.payload.id);
      if (product) {
        product.quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
      state.totalAmount += action.payload.price;
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id);
      state.totalAmount -= action.payload.price * action.payload.quantity;
    },
    incrementQuantity: (state, action) => {
      const product = state.cartItems.find(item => item.id === action.payload.id);
      if (product) {
          product.quantity += 1;
          
        state.totalAmount += product.price;
      }
    },
    decrementQuantity: (state, action) => {
      const product = state.cartItems.find(item => item.id === action.payload.id);
      if (product && product.quantity > 0) {
        product.quantity -= 1;
        state.totalAmount -= product.price;
      }
    },
    removeAllCartItems: (state) => {
      state.cartItems = [];
      state.totalAmount = 0;
    }
  },
});

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity, removeAllCartItems } = cartSlice.actions;
export default cartSlice.reducer;
