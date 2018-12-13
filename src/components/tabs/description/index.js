import React, { Component } from 'react';
import './index.css';


class Description extends Component {


  render() {

    return (
      <div className="Description">
       <p>{this.props.description}</p>
      </div>
    );
  }
}

export default Description;
