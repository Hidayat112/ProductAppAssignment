import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../slices/productSlices';
import cartReducer from '../slices/cartSlices';
export const store = configureStore({
  reducer: {
        product: productReducer,
      cart: cartReducer
  },
});

export default store;
