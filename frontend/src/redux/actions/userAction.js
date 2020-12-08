import store from '../store';
import axios from 'axios';
import { API_URL } from '../../config'
import { userActions } from '../actions/types';

export const signup = async(user) => {
    const res =   await axios.post(API_URL + '/users/signUp', user);
    console.log('signUp',res.data)
    store.dispatch({
        type: userActions.SIGNUP,
        payload: res.data.user
    })
   
}
export const login = async(user) => {
    const res =   await axios.post(API_URL + '/users/login', user);
    console.log('login',res.data.token);
    localStorage.setItem('authToken',JSON.stringify(res.data.token) );
    store.dispatch({
        type: userActions.SIGNIN,
        payload: res.data
    }) 
    
}
export const logout = () => (dispatch)=>{
    localStorage.removeItem('authToken')
    dispatch({type: userActions.LOGOUT})
    document.location.href = '/login'
}