import React, { Component } from 'react';

import * as message from './../constants/Message'

class ProductItem extends Component {
    
    render() {
        var { product } = this.props;
        
        return (
            <div className="col-lg-4 col-md-6 mb-r">
                            <div className="card text-center card-cascade narrower">
                                <div className="view overlay hm-white-slight z-depth-1">
                                    <img src={product.image}
                                        className="img-fluid" alt="" />
                                    <a href ="a">
                                        <div className="mask waves-light waves-effect waves-light"></div>
                                    </a>
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title">
                                        <strong>
                                            <a href ="a">{product.name}</a>
                                        </strong>
                                    </h4>
                                    <ul className="rating">
                                        <li>
                                            { this.showRating(product.rating)}
                                        </li>
                                        
                                        
                                    </ul>
                                    <p className="card-text">
                                        {product.description}
                                    </p>
                                    <div className="card-footer">
                                        <span className="left">{product.price}$</span>
                                        <span className="right">
                                            <a href ="a" className="btn-floating blue-gradient" data-toggle="tooltip" data-placement="top" 
                                            title="" data-original-title="Add to Cart"
                                            onClick={(e) => this.addToCart(e)}>
                                                <i className="fa fa-shopping-cart"></i>
                                            </a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
        );
    }
    showRating(rating){
        var result = [];
        for(var i = 1; i<=rating;i++){
            result.push(<i key={Math.random()} className="fa fa-star"></i>);
        }
        for(var j = 1; j <= (5 - rating); j++){
            result.push(<i key={Math.random()} className="fa fa-star-o"></i>)
        }
        return result;
    }
    addToCart = (e) => {
        
        e.preventDefault()
        this.props.addToCart(this.props.product)
        this.props.changeMessage(message.MSG_ADD_SUCCESS)
    }
    
}

export default ProductItem;