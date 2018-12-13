import React, { Component } from 'react';
import './index.css';
import ProductItem from '../productItem';

class ProductList extends Component {
  render() {

    return (
      <div className="ProductList">
        <div className="row">
        {this.props.products &&
         this.props.products.map(product =>
            <ProductItem info={product} key={product.id} />
         )

        }
      </div>
      </div>
    );
  }
}

export default ProductList;
