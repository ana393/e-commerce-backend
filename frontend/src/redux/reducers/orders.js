import { OrderActions } from '../actions/types';

const ordersReducer =(state=[], action)=>{
 console.log("reducer action: ", action, state);
    switch (action.type){
        case OrderActions.LIST_OREDERS:
            return {
                ...state,
                orders: action.payload
            }
        
        default:
             return state;
    }
}

export default ordersReducer;