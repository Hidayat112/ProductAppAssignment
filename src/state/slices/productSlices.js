import { createSlice } from '@reduxjs/toolkit';
import { fetchInterceptor } from '../../utils/FetchIntercept';
import { API_ENDPOINTS } from '../../utils/constants';

const initialState = {
  products: [],
  loading: false,
  error: null,
};

const productSlice  = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProducts: (state, action) => {
      state.products = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },    
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { addProducts, setError, setLoading } = productSlice.actions;  


export const fetchProducts = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
      const response = await fetchInterceptor(API_ENDPOINTS.PRODUCTS);
      const data = await response.json();
      dispatch(addProducts(data));
  } catch (error) {
      dispatch(setError(error));  
  } finally {
      dispatch(setLoading(false));
  }
}
export default productSlice.reducer;
