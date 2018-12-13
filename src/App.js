import React, { Component } from 'react';
import './App.css';
import Home from './views/home';
import Checkout from './views/checkout';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import PRODUCTS from './static/data/products.js';

class App extends Component {
  constructor(){
  super();
  this.state = {
    products: [],
    cart: []
  };
}



componentWillMount(){
  this.setState({
    products: PRODUCTS
  });

}
addItem = id => {
  let item = {};
  let cart = this.state.cart;
 for(let index in this.state.products){
   if (this.state.products[index].id === id){
     item = this.state.products[index];
     break;
   }
 }
cart.push(item);
this.setState({
  cart: cart
});
console.log(this.state.cart);
}
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' render={() => <Home addItem={this.addItem} products={this.state.products} />} />
          <Route exact path='/checkout' render={() => <Checkout />} />
        </Switch>
      </div>
    );
  }
}

export default App;
