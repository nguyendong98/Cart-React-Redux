import { combineReducers } from 'redux'
import products from './products'
import cart from './cart'
import message from './message'
var myReducer = combineReducers({
    products: products,
    cart: cart,
    message: message
})

export default myReducer