import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import purchaseReducer from './purchase/reducer';

const reducers = combineReducers({
  purchase: purchaseReducer
})

const store = createStore(reducers, applyMiddleware(thunk));

export default store;