import React, { Component } from 'react';
import * as message from './../constants/Message'
class CartItem extends Component {
    render() {
        var {cartItem} = this.props;
        
        
        return (
            <tr>
                <th scope="row">
                    <img src={cartItem.product.image}
                        alt="" className="img-fluid z-depth-0" />
                </th>
                <td>
                    <h5>
                        <strong>{cartItem.product.name}</strong>
                    </h5>
                </td>
                <td>{cartItem.product.price}$</td>
                <td className="center-on-small-only">
                    <span className="qty">{cartItem.qty}</span>
                    <div className="btn-group radio-group" data-toggle="buttons">
                        <label className="btn btn-sm btn-primary
                            btn-rounded waves-effect waves-light" onClick={() => this.updateUnPlusCart(cartItem)}>
                            <a href ="a" >—</a>
                        </label>
                        <label className="btn btn-sm btn-primary
                            btn-rounded waves-effect waves-light" onClick={() => this.updatePlusCart(cartItem)}>
                            <a href ="a" >+</a>
                        </label>
                    </div>
                </td>
                <td>{this.showSubTotal(cartItem.product.price, cartItem.qty)}$</td>
                <td>
                    <button type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top"
                        title="" data-original-title="Remove item" onClick={() => this.deleteCart(cartItem)}>
                        X
                    </button>
                </td>
            </tr>
        );
    }
    showSubTotal = (price, qty) => {
        return price * qty
    }
    deleteCart = (cartItem) => {
        this.props.deleteCart(cartItem)
        this.props.changeMessage(message.MSG_DELETE_PRODUCT_IN_CART)
    }
    updatePlusCart = async (cartItem) => {
       await  this.props.updatePlusCart(cartItem)
        this.props.changeMessage(message.MSG_UPDATE_SUCCESS)
    }
    updateUnPlusCart = async (cartItem) => {
       await this.props.updateUnPlusCart(cartItem)
        this.props.changeMessage(message.MSG_UPDATE_SUCCESS)
    }
}

export default CartItem;