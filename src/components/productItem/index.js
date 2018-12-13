import React, { Component } from 'react';
import './index.css';
import PanelTabs from '../tabs';

class ProductItem extends Component {
  render() {
    console.log(this.props.info)
    return (
      <div className="col-md-4">
      <div className="card">
      <div className="card-img-top">
        <img className="card-img" src="http://placehold.it/250x250"
        alt="Gem" />
      </div>
      <div className="card-title">{this.props.info.name}</div>
      <div className="card-subtitle">${this.props.info.price}</div>
      <button className="btn btn-primary" onClick={() => this.props.addItem(this.props.info.id)}> Add to Cart</button>
      {/* add tabs here*/}
      <PanelTabs info={this.props.info}/>

      </div>

      </div>
    );
  }
}

export default ProductItem;
