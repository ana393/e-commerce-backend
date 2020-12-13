import store from '../store';
import axios from 'axios';
import { API_URL } from '../../config'
import { userActions } from '../actions/types';

export const allUsers = async()=> {
    const res = await axios.get(API_URL + 'users');
    console.log('allUsers',res.data)
    store.dispatch({
        type: userActions.ALLUSERS,
        payload: res.data
    })
}
export const updateProfile = async (id, user)=>{
   await axios.put(API_URL + 'users/' + id, user, {
        headers: {
            Authorization: localStorage.getItem('authToken')
        }
     })
       
   
}
 export const deleteUser = async(id) =>{
      await axios.delete(API_URL + 'users/' + id,  {
        headers: {
            Authorization: localStorage.getItem('authToken')
        }
     })
    return allUsers();
 }

export const signup = async(user) => {
    const res =   await axios.post(API_URL + 'users/signUp', user);
   // console.log('signUp',res.data)
    store.dispatch({
        type: userActions.SIGNUP,
        payload: res.data.user
    })
   
}
export const login = async(user) => {
    const res =   await axios.post(API_URL + 'users/login', user);
  //  console.log('login',res.data.token);
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
    document.location.href = '/signin'
}