//REACT IMPORTS
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class MovieItem extends Component {
  seeDetails = event => {
    this.props.history.push('/details');
  };

  render() {
    return (
      <tr>
        <td>
          <img
            alt={this.props.movie.title}
            src={this.props.movie.poster}
            onClick={this.seeDetails}
          />
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

export default withRouter(MovieItem);
