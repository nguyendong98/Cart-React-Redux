import React, { Component } from 'react';

import { connect } from 'react-redux'
import Carts from '../components/Carts';
import CartItem from './../components/CartItem';
import * as messages from './../constants/Message'
import CartTotal from '../components/CartTotal';
import * as actions from './../actions/index'

class CartContainer extends Component {
    render() {
        
        var {cart} = this.props
        
        return (
            <Carts>
                {this.showCart(cart)}
                {this.showTotalAmount(cart)}
            </Carts>
        );
    }
    showCart = (cart) => {
        var {deleteCart} = this.props;
        var result = <tr>
            <td>{messages.MSG_CART_EMPTY}</td>
        </tr>;
        if(cart.length > 0){
            
            result = cart.map((value, key) => {
                return <CartItem key={key} 
                                cartItem={value} 
                                index={key}
                                deleteCart={deleteCart}
                                changeMessage={this.props.changeMessage}
                                updatePlusCart={this.props.updatePlusCart}
                                updateUnPlusCart={this.props.updateUnPlusCart}
                                />
            })
            return result
        }
        return result
    }
    showTotalAmount = (cart) => {
        var result = null;
        if(cart.length > 0) {
            return <CartTotal cart={cart} />
        }
        return result;
    }
}
const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        deleteCart: (product) => {
            dispatch(actions.delete_Cart(product))
        },
        changeMessage: (message) => {
            dispatch(actions.changeMessage(message))
        },
        updatePlusCart: (product) => {
            dispatch(actions.updatePlusCart(product))
        },
        updateUnPlusCart: (product) => {
            dispatch(actions.updateUnPlusCart(product))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CartContainer)