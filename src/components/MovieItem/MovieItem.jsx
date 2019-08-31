//REACT IMPORTS
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class MovieItem extends Component {
  seeDetails = event => {
    let id = this.props.movie.id;
    this.props.dispatch({
      type: 'FETCH_SELECTED',
      payload: this.props.movie
    });
    this.props.history.push(`/details/${id}`);
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

export default withRouter(connect()(MovieItem));
