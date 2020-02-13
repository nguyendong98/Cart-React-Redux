import React, { Component } from 'react';

import { connect } from 'react-redux'
import Products from '../components/Products';
import ProductItem from './../components/ProductItem';
import * as actions from './../actions/index'

class ProductsContainer extends Component {
    render() {
        
        var {products} = this.props
        return (
            <Products>
                {this.showProduct(products)}
            </Products>
        );
    }
    showProduct = (products) => {
        var {addToCart} = this.props
        if(products.length > 0){
            var result = null;
            result = products.map((product, key) => {
                return <ProductItem key={key} 
                product={product} 
                index={key}
                addToCart={addToCart}
                changeMessage={this.props.changeMessage}/>
            })
            return result
        }
    }
}
const mapStateToProps = state => {
    return {
        products: state.products
        
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addToCart: (product) => {
            dispatch(actions.addToCart(product, 1))
        },
        changeMessage: (message) => {
            dispatch(actions.changeMessage(message))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer)