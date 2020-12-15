import { userActions } from '../actions/types';

const userReducer =(state={}, action)=>{
 
    switch (action.type){
        case userActions.ALLUSERS:
            return {
                ...state,
                users: action.payload
            }
        case userActions.SIGNIN:
            return {
                ...state,
                user: action.payload
            }
        case userActions.LOGOUT:
            localStorage.clear();
            return {
                ...state,
                user:{},
               
            }
        default:
             return state;
    }

};
export default userReducer;