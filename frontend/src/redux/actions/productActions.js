import store from '../store';
import axios from 'axios';
import { API_URL } from '../../config'
import { ProductActions } from '../actions/types';

export const listProducts = async()=>{
   const res = await axios.get(API_URL + 'products');
   console.log('Products',res.data)
   store.dispatch({
       type: ProductActions.LIST_PRODUCTS,
       payload: res.data
   })
   
}
export const searchProduct = async(word)=>{
     const res = await axios.get(API_URL + `products/search?name=${word}`);
   store.dispatch({
       type: ProductActions.SEARCH,
       payload:res.data.product
   })
}
export const byPrice = async()=>{
   await axios.get(API_URL + 'products/byPrice');
 
   return listProducts();
}

export const insertProduct = async(product) => {
  const res =  await axios.post(API_URL + 'products/insert',product);
   return res
}
export const updateProduct = async(id, product) => {
     await axios.post(API_URL + 'products/update' + id, product);
    return listProducts();
}
export const deleteProduct = async(id) => {
 const res =  await axios.delete(API_URL + 'products/' + id);
  store.dispatch({
    type: ProductActions.DELETE,
    payload: res.data
  })
   
}
