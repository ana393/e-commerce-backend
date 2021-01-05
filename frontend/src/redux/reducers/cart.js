import { CartActions } from '../actions/types';

const cartItems =localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [];
const initState = {cart: cartItems};

const cartReducer =(state = initState, action) => {  
    switch (action.type) {
        case CartActions.ADD_ITEM:
            return {
                ...state,
                cart: action.payload.cartItems
            };
        case CartActions.REMOVE_ITEM:
            return {
                ...state,
                cart: action.payload.cartItems
            };
        case  CartActions.ADD_1_ITEM:
            return {
                ...state,
                cart: action.payload.cartItems
            };
        case CartActions.REMOVE_1_ITEM:
            return {
                ...state,
               cart: action.payload.cartItems
            };

        case CartActions.CLEAR_CART:
            localStorage.clear();
            return {
                ...state,
                cart: []
            };
        default:
            return state;
    }
}

export default cartReducer;