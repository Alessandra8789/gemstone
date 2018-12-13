import React, { Component } from 'react';
import './index.css';
import ReviewList from './reviewList';
class Reviews extends Component {


  render() {

    return (
      <div className="Reviews">
        <ReviewList reviews={this.props.reviews} />
      </div>
    );
  }
}

export default Reviews;
