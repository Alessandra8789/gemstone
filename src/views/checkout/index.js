import React, { Component } from 'react';
import './index.css';
import CheckoutTable from '../../components/checkoutTable';

class Checkout extends Component {
  render() {
    return (
      <div className="Checkout">
        <CheckoutTable cart={this.props.cart} removeItem={this.props.removeItem} total={this.props.total} />
      </div>
    );
  }
}

export default Checkout;
