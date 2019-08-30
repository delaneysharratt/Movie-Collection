//REACT IMPORTS
import React, { Component } from 'react';
import { connect } from 'react-redux';

import MovieItem from '../MovieItem/MovieItem';

class MovieList extends Component {
  render() {
    return (
      <div>
        <MovieItem />
      </div>
    );
  }
}

export default connect()(MovieList);
