import store from '../store';
import {  CartActions } from '../actions/types';

export const addCart = (newProduct) =>{
  const cartItems =store.getState().cart.items; 
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
   const cartItems =store.getState().cart.items.filter(i => i._id !== removeItem._id);
   localStorage.setItem("cartItems", JSON.stringify(cartItems));
   store.dispatch({
       type: CartActions.REMOVE_ITEM,
       payload: { cartItems }
   })
}
export const removeAnItemCart = (removeItem) =>{
   const cartItems =store.getState().cart.items.filter((i) =>{
       if ( i._id === removeItem._id){
         removeItem.count = removeItem.count --;
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