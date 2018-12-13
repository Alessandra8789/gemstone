import React, { Component } from 'react';
import './index.css';
import ReviewItem from '../reviewItem';
class ReviewList extends Component {


  render() {

    return (
      <div className="ReviewList">
      {this.props.reviews &&
      this.props.reviews.map(review =>
        <ReviewItem key={review.id} review={review}/>
      )
    }
      </div>
    );
  }
}

export default ReviewList;
