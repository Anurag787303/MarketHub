import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
    productDetailsReducer,
    productReducer
} from './reducers/productReducer';
import { userReducer, profileReducer } from './reducers/userReducer';

const reducer = combineReducers({
    productDetails: productDetailsReducer,
    products: productReducer,
    user: userReducer,
    profile: profileReducer
});

let initialState = {};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;