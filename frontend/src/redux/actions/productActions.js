import store from '../store';
import axios from 'axios';
import { API_URL } from '../../config'
import { ProductActions} from '../actions/types';

export const listProducts = async()=>{
   const res = await axios.get(API_URL + 'products');
    store.dispatch({
       type: ProductActions.LIST_PRODUCTS,
       payload: res.data
   })
   
}
export const searchProduct = async(dispatch,word)=>{
     const { data } = await axios.get(API_URL + `products/search?name=${word}`);
     const Item = data["filter"].map((item) => ({
       _id: item["_id"],
       name: item["name"],
       price: item["price"],
       category: item["category"],
       InStock: item["InStock"]
     }));
     console.log('search item:', Item);
    return dispatch({
       type: ProductActions.LIST_PRODUCTS,
       payload: Item,
   })
}
export const byPrice = async()=>{
   await axios.get(API_URL + 'products/byPrice');
 
   return listProducts();
}

export const insertProduct = async(product) => {
   const token = JSON.parse(localStorage.getItem('authToken'));
  const res =  await axios.post(API_URL + 'products/insert', product,  {headers: {Authorization: token}});
    
    store.dispatch({
        type: ProductActions.INSERT,
        payload: res.data
    })
}
export const updateProduct = async(id, product) => { 
   const token = JSON.parse(localStorage.getItem('authToken'));
    await axios.put(API_URL + `products/update/${id}`, product, {headers: {Authorization: token}} );
    
     return listProducts();
}
export const deleteProduct = async(id) => {
  const token = JSON.parse(localStorage.getItem('authToken'));
 await axios.delete(API_URL + 'products/' + id, 
            {headers: {Authorization: token}}
        )
    
 return listProducts();
}

