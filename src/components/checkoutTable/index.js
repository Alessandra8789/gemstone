import React, { Component } from 'react';
import './index.css';
import CheckoutItem from '../checkoutItem';

class CheckoutTable extends Component {
  render() {
    return (
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>Quantity</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {this.props.cart &&
              this.props.cart.map((item, key) =>
                <CheckoutItem key={key} item={item} removeItem={this.props.removeItem} />
              )
            }
          </tbody>
          <tfoot>
            <tr>
              <th colSpan="2">Total:</th>
              <th colSpan="2">${this.props.total}</th>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}

export default CheckoutTable;
