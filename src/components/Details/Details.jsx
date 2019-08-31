//REACT IMPORTS
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Details extends Component {
  componentDidMount() {
    this.getDetails();
  }

  getDetails() {
    let id = this.props.match.params;
    this.props.dispatch({
      type: 'FETCH_SELECTED',
      payload: id
    });
  }

  //Return to Home Page on "Back To List" click
  returnHome = event => {
    this.props.dispatch({
      type: 'SET_SELECTED',
      payload: ''
    });
    this.props.history.push('/');
  };

  ///Go to Edit Page on "Edit" click
  editMovie = event => {
    let id = this.props.currentMovie.id;
    this.props.history.push(`/edit/${id}`);
  };

  render() {
    console.log(this.props.currentMovie);

    return (
      <div>
        <img
          alt={this.props.currentMovie.id}
          src={this.props.currentMovie.poster}
        />
        <h1>{this.props.currentMovie.title}</h1>
        <h3>Genres:</h3>
        <p>{this.props.currentMovie.description}</p>
        <button onClick={this.returnHome}>Back To List</button>
        <button onClick={this.editMovie}>Edit</button>
      </div>
    );
  }
}

const mapStateToProps = reduxStore => ({
  currentMovie: reduxStore.selected
});

export default withRouter(connect(mapStateToProps)(Details));
