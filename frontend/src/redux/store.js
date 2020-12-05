import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';
import { save, load } from 'redux-localstorage-simple'; 

const composeEnhancer = composeWithDevTools({
    trace: true
});

const store = createStore(rootReducer, load(), composeEnhancer(applyMiddleware(save())))

export default store;