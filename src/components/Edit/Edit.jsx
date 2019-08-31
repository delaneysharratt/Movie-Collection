//REACT IMPORTS
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Edit extends Component {
  //Local state contains edits for updated movie
  state = {
    currentMovie: {
      id: this.props.currentMovie.id,
      poster: this.props.currentMovie.poster,
      title: this.props.currentMovie.title,
      description: this.props.currentMovie.description
    }
  };

  componentDidMount() {
    this.getEditDetails();
  }

  getEditDetails() {
    let id = this.props.match.params;
    this.props.dispatch({
      type: 'FETCH_SELECTED',
      payload: id
    });
  }

  //Sets input text as new title for selected movie
  changeTitle = event => {
    this.setState({
      currentMovie: {
        ...this.state.currentMovie,
        title: event.target.value
      }
    });
  };

  //Set text as new description for selected movie
  changeDescription = event => {
    this.setState({
      currentMovie: {
        ...this.state.currentMovie,
        description: event.target.value
      }
    });
  };

  //Exits edit and returns to movie details
  cancelEdit = event => {
    console.log('Canceling edit...');
    this.props.history.push('/details');
  };

  //Dispatches an action to redux
  //with payload of currentMovie from state
  updateMovie = event => {
    console.log('Updating movie...');
    this.props.dispatch({
      type: 'UPDATE_MOVIE',
      payload: this.state.currentMovie
    });
    this.props.history.push('/details');
  };

  render() {
    console.log('Local state:', this.state.currentMovie);
    console.log('currentMovie reducer:', this.props.currentMovie);
    return (
      <div>
        <p>EDIT PAGE</p>
        <input
          onChange={this.changeTitle}
          type="text"
          placeholder={this.state.currentMovie.title}
        />
        <br />
        <textarea
          rows="10"
          col="100"
          name="description"
          onChange={this.changeDescription}
          placeholder={this.state.currentMovie.description}
        />
        <br />
        <button onClick={this.cancelEdit}>Cancel</button>
        <button onClick={this.updateMovie}>Save</button>
      </div>
    );
  }
}

const mapStateToProps = reduxStore => ({
  currentMovie: reduxStore.selected
});

export default connect(mapStateToProps)(Edit);
