import { ProductActions } from '../actions/types';

const productsReducer =(state={}, action)=>{
 console.log("reducer action Lista Productos: ", action, state);
    switch (action.type){
        case ProductActions.LIST_PRODUCTS:
            return {
                ...state,
                product: action.payload
            }
        
        default:
             return state;
    }
}

export default productsReducer;