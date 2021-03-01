import { OrderActions } from '../actions/types';

 export const ordersReducer =(state={}, action)=>{

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
export const  myOrdersReducer =(state={myorders: []}, action)=>{

    switch (action.type){
        case OrderActions.MYORDERS:
            return {
                ...state,
                myorders: action.payload
            }
        
        default:
             return state;
    }
}