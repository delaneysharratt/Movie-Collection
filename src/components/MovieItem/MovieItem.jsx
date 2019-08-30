//REACT IMPORTS
import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieItem extends Component {
  render() {
    return (
      <tr>
        <td>
          <img alt={this.props.movie.title} src={this.props.movie.poster} />
        </td>
        <td>
          <h2>{this.props.movie.title}</h2>
          <br />
          <p>{this.props.movie.description}</p>
        </td>
      </tr>
    );
  }
}

export default connect()(MovieItem);
