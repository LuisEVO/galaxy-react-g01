# Redux

## Instalacion

```
npm install redux react-redux
```

## Configuracion

index.js
```
import { Provider } from 'react-redux'
import store from './store'

<Provider store={store}>
  <App>
</Provider>
```

store/index.js
```
import { createStore } from 'redux';
import purchaseReducer from './reducer';

const store = createStore(purchaseReducer);

export default store;
```

### Multiples reducers

store/index.js
```
import { createStore, combineReducer } from 'redux';
import purchaseReducer from './reducer';

const reducers = combineReducer({
  purchase: purchaseReducer
})
const store = createStore(reducers);

export default store;
```


## Efectos colaterales

```
npm i redux-thunk
```

## Configuracion

index.js
```
import { createStore, combineReducer, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import purchaseReducer from './reducer';

const reducers = combineReducer({
  purchase: purchaseReducer
})
const store = createStore(reducers, applyMiddleware(thunk));

export default store;
```