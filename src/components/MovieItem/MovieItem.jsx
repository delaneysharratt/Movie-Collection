//REACT IMPORTS
import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieItem extends Component {
  render() {
    return (
      <div>
        <p>Empty Page</p>
      </div>
    );
  }
}

export default connect()(MovieItem);
