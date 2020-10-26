import store from '../store';
import axios from 'axios';
import { userActions } from '../actions/types';

export const signup = (user) => {
    return  axios.post('/users/signUp', user).then(res=>{
    store.dispatch({
        type: userActions.SIGNUP
    })
    return res.data;
    })
    
}
