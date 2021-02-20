import { OrderActions } from '../actions/types';

const ordersReducer =(state={}, action)=>{
    console.log('arders redux', state, action)
    switch (action.type){
        case OrderActions.LIST_ORDERS:
            return {
                ...state,
                orders: action.payload
            }
        
        default:
             return state;
    }
}

export default ordersReducer;