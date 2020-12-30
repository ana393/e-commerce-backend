import  { combineReducers } from 'redux';
import user from './users.js';
import  product from './products';
import cart from './cart';
import orders from './orders';


const rootReducer = combineReducers({
  user,
  product,
  cart,
  orders
});
export default rootReducer;