import  { combineReducers } from 'redux';
import user from './users.js';
import  product from './products.js';
import cart from './cart.js';
import orders from './orders.js';



const rootReducer = combineReducers({
  user,
  product,
  cart,
  orders
});
export default rootReducer;