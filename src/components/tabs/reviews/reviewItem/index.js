import React, { Component } from 'react';
import './index.css';

class ReviewItem extends Component {


  render() {

    return (
      <div className="ReviewItem">
      <blockquote>
      <h6>{this.props.review.rating} |{this.props.review.body}</h6>
      &mdash; {this.props.review.author}
      </blockquote>
      </div>
    );
  }
}

export default ReviewItem;
