import * as types from './../constants/actionTypes'

export const product = () => {
    return {
        type: types.PRODUCT
    }
}
export const addToCart = (product, qty) => {
    return {
        type: types.ADD_TO_CART,
        product,
        qty
    }
}
export const delete_Cart = (product) => {
    return {
        type: types.DELETE_CART,
        product
    }
}
export const changeMessage = (message) => {
    return {
        type: types.CHANGE_MESSAGE,
        message
    }
}
export const updatePlusCart = (product) => {
    return{
        type: types.UPDATE_PLUS_CART,
        product
    }
}
export const updateUnPlusCart = (product) => {
    return{
        type: types.UPDATE_UNPLUS_CART,
        product
    }
}