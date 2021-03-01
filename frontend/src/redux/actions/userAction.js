import store from '../store';
import axios from 'axios';
import { API_URL } from '../../config'
import { userActions, CLEAR_STORE } from '../actions/types';

export const allUsers = async()=> {
    const token = JSON.parse(localStorage.getItem('authToken')); 
    const res = await axios.get(API_URL + 'users', {headers: {Authorization: token}});
    store.dispatch({
        type: userActions.ALLUSERS,
        payload: res.data
    })
}
export const updateProfile = async (id, body)=>{
  const token = JSON.parse(localStorage.getItem('authToken'));
    await axios.put(API_URL + `users/${id}` , body, {headers: {Authorization: token}});
    
  return allUsers(); 
}
 export const deleteUser = async(id) =>{
     const token = JSON.parse(localStorage.getItem('authToken'));
      await axios.delete(API_URL + 'users/' + id, {headers: {Authorization: token}}
     )
    return allUsers();
 }

export const signup = async(user) => {
    const res =   await axios.post(API_URL + 'users/signUp', user);
    store.dispatch({
        type: userActions.SIGNUP,
        payload: res.data
    })
   
}
export const login = async(user) => {
    const res =   await axios.post(API_URL + 'users/login', user);
    localStorage.setItem('authToken',JSON.stringify(res.data.token) );
    
    store.dispatch({
        type: userActions.SIGNIN,
        payload: res.data
    }) 
    
}
export const logout = () =>{
    localStorage.removeItem('authToken')
    store.dispatch({
        type: userActions.LOGOUT})
    document.location.href = '/'
}
export const clearStore = () => {
    store.dispatch({
        type: CLEAR_STORE
    })
}