import  { combineReducers } from 'redux';
import user from './users.js';
//import product from './products';

const rootReducer = combineReducers({
  user
});
export default rootReducer;