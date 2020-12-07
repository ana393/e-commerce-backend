import { userActions } from '../actions/types';

const userReducer =(state=[], action)=>{
    console.log("reducer action: ", action, state);
    switch (action.type){
        case userActions.SIGNUP:
            return {
                ...state,
                user: action.payload
            }
        case userActions.SIGNIN:
            return {
                ...state,
                user: action.payload
            }
        case userActions.LOGOUT:
            return {
                ...state,
                user:{}
            }
        default:
             return state;
    }

};
export default userReducer;