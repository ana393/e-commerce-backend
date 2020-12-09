import store from '../store';
import axios from 'axios';
import { API_URL } from '../../config'
import { OrderActions } from '../actions/types';

export const listOrders = async()=>{
    try {
        const res = await axios.get(API_URL + 'orders');
        store.dispatch({
            type:OrderActions.LIST_OREDERS,
            payload:res.data
        })
    } catch (error) {
       console.error(error) 
    }
}
export const createOrder = async(order)=>{
  await axios.post(API_URL + 'orders/create', order);
  return listOrders();
}

export const updateOrder= async(referenceNumber, order)=>{
   await axios.put(API_URL + 'orders/update/' + referenceNumber, order);
  return listOrders(); 
}

export const deleteOrder = async(id)=>{
    await axios.delete(API_URL +'orders/' + id);
    return listOrders();
}