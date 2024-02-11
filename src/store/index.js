import { createStore, combineReducers, applyMiddleware } from 'redux'
import { thunk } from 'redux-thunk'
import { productsReducer } from './reducers/productsReducer';
import { categoriesReducer } from './reducers/categoriesReducer';
import { singleProductReducer } from './reducers/singleProductReducer';
import { cartReducer } from './reducers/cartReducer';


const rootReducer = combineReducers({
  products: productsReducer,
  categories: categoriesReducer,
  product: singleProductReducer,
  cart: cartReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));