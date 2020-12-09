import  { combineReducers } from 'redux';
import user from './users.js';
import  product from './products';
import orders from './orders';
//import product from './products';

const rootReducer = combineReducers({
  user,
  product,
  orders
});
export default rootReducer;