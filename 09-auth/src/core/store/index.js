import { configureStore } from '@reduxjs/toolkit';
import purchaseReducer from './purchase/reducer';
import authReducer from './auth/reducer';

const store = configureStore({
  reducer: {
    purchase: purchaseReducer,
    auth: authReducer
  }
});

export default store;