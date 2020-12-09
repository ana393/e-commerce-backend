import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';
import { save, load } from 'redux-localstorage-simple'; 

const composeEnhancer = composeWithDevTools({
    trace: true
});

const StoreWithMiddleware = applyMiddleware(save())(createStore);
const store = StoreWithMiddleware(rootReducer, load(), composeEnhancer());

export default store;