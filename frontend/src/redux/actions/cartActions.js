import store from '../store';
//import axios from 'axios';
//import { API_URL } from '../../config'
import {  CartActions } from '../actions/types';

export const addCart = (newProduct) =>{
  const cartItems =store.getState().cart.cart; 
  let exists = false;
 cartItems.forEach(cItem => {
   if (cItem._id === newProduct._id) {
     exists= true;
     cItem.count++;
     
   }
 });
  if (!exists){
     cartItems.push({...newProduct, count: 1});
  }
  
   localStorage.setItem("cartItems", JSON.stringify(cartItems));
   store.dispatch({
      type:CartActions.ADD_ITEM,
      payload: { cartItems }
    }); 
};


export const removeItemCart = (removeItem) =>{
   const cartItems =store.getState().cart.cart.filter(i => i._id !== removeItem._id);
   localStorage.setItem("cartItems", JSON.stringify(cartItems));
   store.dispatch({
       type: CartActions.REMOVE_ITEM,
       payload: { cartItems }
   })
};
export const addAnItemCart = (addItem) =>{
   const cartItems =store.getState().cart.cart.filter((i) =>{
       if ( i._id === addItem._id){
         addItem.count ++;
       }
       return addItem;
   });
   localStorage.setItem("cartItems", JSON.stringify(cartItems));
   store.dispatch({
       type: CartActions.ADD_1_ITEM,
       payload: { cartItems }
   })
}
export const removeAnItemCart = (removeItem) =>{
   const cartItems =store.getState().cart.cart.filter((i) =>{
       if ( i._id === removeItem._id){
         removeItem.count --;
       }
       return removeItem;
   });
   localStorage.setItem("cartItems", JSON.stringify(cartItems));
   store.dispatch({
       type: CartActions.REMOVE_1_ITEM,
       payload: { cartItems }
   })
}

export const clearCart = () => {
  store.dispatch({
    type:CartActions.CLEAR_CART
  })
}