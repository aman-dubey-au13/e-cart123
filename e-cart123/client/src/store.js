import {getAllProductsReducer,getProductByIdReducer} from './reducers/productReducer'
import {cartReducer} from './reducers/cartReducer'
import {placeOrderReducer} from './reducers/orderReducer'
import {registerNewUserReducer,loginReducer} from './reducers/userReducer'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers } from 'redux';


const finalReducer=combineReducers ({
    getAllProductsReducer:getAllProductsReducer,
    getProductByIdReducer:getProductByIdReducer,
    cartReducer:cartReducer,
    registerNewUserReducer:registerNewUserReducer,
    loginReducer:loginReducer,
    placeOrderReducer:placeOrderReducer,
    // getAllUsersReducer:getAllUsersReducer

})

const cartItems = localStorage.getItem('cartItems')?JSON.parse(localStorage.getItem('cartItems')):[]
const currentUser = localStorage.getItem('currentUser')?JSON.parse(localStorage.getItem('currentUser')):null

const initialState={
  cartReducer:{cartItems:cartItems},
  loginReducer:{currentUser:currentUser}
}

const composeEnhancers = composeWithDevTools({
    // Specify here name, actionsBlacklist, actionsCreators and other options
  });

const store = createStore(
    finalReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(thunk)
      // other store enhancers if any
    )
  );

export default store;