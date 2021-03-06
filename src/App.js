import React, { Component } from 'react';
import './App.css';
import Home from './views/home';
import Checkout from './views/checkout';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import PRODUCTS from './static/data/products.js';
import firebase from './firebase';

class App extends Component {
  constructor() {
    super();

    this.state = {
      products: [],
      cart: [],
      total: 0
    };

    // push products to firebase
    firebase.database().ref('products').set(PRODUCTS);
    // push total to firebaseio
    firebase.database().ref('total').set(0);
  }


  componentWillMount() {
    // grab information stored on firebase, set state with all variables
    const DB = firebase.database().ref();
    DB.on('value', snapshot => {
     let data = snapshot.val();

     if (data.cart){
       this.setState({
         products:data.products,
         cart:data.cart,
         total:data.total
       });

     } else{
       this.setState({
         products: data.products,
         total: data.total
       });
     }
    });
  }


  // add product to cart using an id, function written here because state is stored within this component
  addItem = id => {
    // step 1: define empty object, to be set to the proper product later
    let item = {};
    let cart = this.state.cart;

    // step 2: loop through products in state and find correct id
    for (let index in this.state.products) {
      if (this.state.products[index].id === id) {
        // step 3: assign correct product into item and break loop
        item = this.state.products[index];
        break;
      }
    }

    // step 4: push item to cart variable and set the state again
    cart.push(item);
    this.setState({
      cart: cart
    });

    // console.log(this.state.cart);
    this.calcTotal();

    // push cart up to firebasei
    firebase.database().ref('cart').set(cart);
  }


  // remove item from cart, set state
  removeItem = id => {
    // set a local variable to the current cart
    let items = this.state.cart;

    // loop through the current cart and splice when we find the correct id
    for (let index in items) {
      if (items[index].id === id) {
        items.splice(index, 1);
        break;
      }
    }

    // set the cart state to the new items array
    this.setState({
      cart: items
    });

    this.calcTotal();

    // push cart up to firebasei
    firebase.database().ref('cart').set(items);
  }


  // calculate total from items in cart within the state
  calcTotal = () => {
    // set a total variable to zero
    let total = 0;

    // loop through current state cart and add prices
    for (let index in this.state.cart) {
      total += this.state.cart[index].price;
    }

    // fix total to two decimals
    total = total.toFixed(2);

    // set total to state
    this.setState({
      total: total
    });

    // console.log(this.state.total);
    /// push new cart to firebase
    firebase.database().ref('total').set(total);
  }


  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' render={() => <Home products={this.state.products} addItem={this.addItem} />} />

          <Route exact path='/checkout' render={() => <Checkout cart={this.state.cart} removeItem={this.removeItem} total={this.state.total} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
