import { ProductActions } from '../actions/types';

const productsReducer =(state = {}, action)=>{
  
    switch (action.type){
        case ProductActions.LIST_PRODUCTS:
            return {
                ...state,
                product: action.payload
            }
         case ProductActions.DELETE:
            return {
              ...state,
                product: action.payload
               
            }
       
        default:
             return state;
    }
}

export default productsReducer;