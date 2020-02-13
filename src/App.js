import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductsContainer from './containers/ProductsContainer';


import CartContainer from './containers/CartContainer';
import NotifyContainer from './containers/NotifyContainer';

class App extends Component {
  render() {
    return (
      <div className="hidden-sn animated deep-purple-skin">
        <div>
        <Header />                                      {/* Header  */}                                       
        
        <main id="mainContainer">
            <div className="container">
                
                <ProductsContainer />                               {/* Product */}
                
                <NotifyContainer />                                {/* Notify  */}                            
                
                
                <CartContainer />                               {/* Carts */}
            </div>
        </main>
        <Footer />                              {/* Footer  */}
        
        
    </div>
      </div>
    );
  }
}

export default App;

