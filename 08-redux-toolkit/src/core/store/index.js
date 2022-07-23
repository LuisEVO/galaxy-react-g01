import { configureStore } from '@reduxjs/toolkit';
import purchaseReducer from './purchase/reducer';

const store = configureStore({
  reducer: {
    purchase: purchaseReducer
  }
});

export default store;