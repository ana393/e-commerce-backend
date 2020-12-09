import  { combineReducers } from 'redux';
import user from './users.js';
import  product from './products';
//import product from './products';

const rootReducer = combineReducers({
  user,
  product
});
export default rootReducer;