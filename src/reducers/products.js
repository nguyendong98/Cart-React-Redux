import * as types from './../constants/actionTypes'

const InitialState = [
    {
        id: 1,
        name: 'Xiaomi RedMi',
        image: 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
        description: 'Product was make by China',
        price: 600,
        inventory: 15,
        rating: 5
    },
    {
        id: 2,
        name: 'Apple',
        image: 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
        description: 'Product was make by VietNam',
        price: 600,
        inventory: 15,
        rating: 4
    },
    {
        id: 3,
        name: 'Iphone',
        image: 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
        description: 'Product was make by England',
        price: 600,
        inventory: 15,
        rating: 3
    }

]
const myReducer = (state = InitialState, action) => {
    switch (action.type) {
        case types.PRODUCT:
            return state
        
        default:
            return state
    }
}

export default myReducer