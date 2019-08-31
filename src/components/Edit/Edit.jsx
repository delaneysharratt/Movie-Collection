//REACT IMPORTS
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Edit extends Component {
  state = {
    currentMovie: {
      title: '',
      description: ''
    }
  };

  //sets text as new title for selected movie
  changeTitle = event => {
    this.setState({
      currentMovie: {
        ...this.state.currentMovie,
        title: event.target.value
      }
    });
  };

  //set text as new description for selected movie
  changeDescription = event => {
    this.setState({
      currentMovie: {
        ...this.state.currentMovie,
        description: event.target.value
      }
    });
  };

  //exits edit and returns to movie details
  cancelEdit = event => {
    console.log('Canceling edit...');
  };

  //dispatches an action to redux
  //with payload of updated movie object
  updateMovie = event => {
    console.log('Updating movie...');
  };

  render() {
    return (
      <div>
        <p>EDIT PAGE</p>
        <input
          onChange={this.changeTitle}
          type="text"
          placeholder="Movie Title"
        />
        <br />
        <textarea
          rows="10"
          col="100"
          name="description"
          onChange={this.changeDescription}
          placeholder="Update Movie Description"
        />
        <br />
        <button onClick={this.cancelEdit}>Cancel</button>
        <button onClick={this.updateMovie}>Save</button>
      </div>
    );
  }
}

export default connect()(Edit);
