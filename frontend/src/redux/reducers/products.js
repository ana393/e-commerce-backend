import { ProductActions } from '../actions/types';

 export const productsReducer =(state = {selected:false}, action)=>{
  
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

