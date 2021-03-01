import  { combineReducers } from 'redux';
import {userReducer} from './users.js';
import  {productsReducer} from './products.js';
import {cartReducer} from './cart.js';
import {ordersReducer, myOrdersReducer} from './orders.js';



const rootReducer = combineReducers({
  user: userReducer,
  product: productsReducer,
  cart: cartReducer,
  orders:ordersReducer,
  myorders:myOrdersReducer
});
export default rootReducer;