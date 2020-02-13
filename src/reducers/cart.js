import * as types from './../constants/actionTypes'
var data = JSON.parse(localStorage.getItem('cart'))
const InitialState = data ? data : []
console.log(InitialState)


const myReducer = (state = InitialState, action) => {
    var i = -1;
    
    switch (action.type) {
        case types.ADD_TO_CART:
            var { product, qty } = action;             
            i = findProductInCart(state, product);           
            if(i!== -1){
                state[i].qty +=1
            }
            else{
                state.push({product,qty})
            }
            localStorage.setItem('cart', JSON.stringify(state))
            return [...state];
        case types.DELETE_CART:
            console.log(action)
            i = findCart(state, action.product);            
            state.splice(i, 1)
            localStorage.setItem('cart', JSON.stringify(state))
            console.log(state)
            return [...state]   
        case types.UPDATE_PLUS_CART:
            i = findCart(state, action.product)
            state[i].qty += 1;
            return [...state]   
        case types.UPDATE_UNPLUS_CART:
            i = findCart(state, action.product)
            if(state[i].qty >1){
                state[i].qty -= 1;
            }
            
            return [...state]
                                   
        default:
            return [...state]
    }
}
var findProductInCart = (cart , product) => {
    var index = -1;
    if(cart.length > 0 ){
        for(var i = 0; i < cart.length; i++){
            if(cart[i].product.id === product.id){
                 return index = i;
                 
                
            }
            
        }
        
        
    }
    return index;
}
var findCart = (cart, product) => {
    var index = -1;
    cart.map((value, key) => {
        if(value.product === product.product){
            return index = key
        }
        return index
    })
    return index
}

export default myReducer