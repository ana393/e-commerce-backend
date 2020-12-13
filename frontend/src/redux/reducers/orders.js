import { OrderActions } from '../actions/types';

const ordersReducer =(state={ }, action)=>{

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