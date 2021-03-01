import store from '../store';
import axios from 'axios';
import { API_URL } from '../../config'
import { OrderActions } from '../actions/types';

export const listOrders = async()=>{
    
    try {
        const token = JSON.parse(localStorage.getItem('authToken'));
        const res = await axios.get(API_URL + 'orders', {headers: {Authorization: token}});
        console.log(res.data);
        store.dispatch({
            type:OrderActions.LIST_ORDERS,
            payload:res.data.orders
        })
    } catch (error) {
       console.error(error) 
    }
}
export const getMyOrders = async(userID)=>{
    try {
      const token = JSON.parse(localStorage.getItem('authToken'));
      const res = await axios.get(API_URL + `orders/myorders?user=${userID}`, {headers: {Authorization: token}});
    
      store.dispatch({
            type:OrderActions.MYORDERS,
            payload:res.data.myOrders
        })  
    } catch (error) {
        console.error(error) 
    } 
     
}
export const createOrder = async(order)=>{
   const token = JSON.parse(localStorage.getItem('authToken')); 
   console.log(token)
  const res = await axios.post(API_URL + 'orders/create', order , {headers: {Authorization: token}});
     console.log(res);
  return listOrders();
}

export const updateOrder= async(id, order)=>{
    const token = JSON.parse(localStorage.getItem('authToken'));
   await axios.put(API_URL + 'orders/update/' + id, order, {headers: {Authorization: token}});
  return listOrders(); 
}

export const deleteOrder = async(id)=>{
     const token = JSON.parse(localStorage.getItem('authToken'));
    await axios.delete(API_URL +'orders/' + id, {headers: {Authorization: token}});
    return listOrders();
}