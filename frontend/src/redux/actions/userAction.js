import store from '../store';
import axios from 'axios';
import { API_URL } from '../../config'
import { userActions } from '../actions/types';

export const signup = async(user) => {
    const res =   await axios.post(API_URL + '/users/signup', user);
    console.log('signup',res.data)
    store.dispatch({
        type: userActions.SIGNUP,
        payload: res.data.user
    })
    
    
}
