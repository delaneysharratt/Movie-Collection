//REACT IMPORTS
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

//MATERIAL-UI IMPORTS
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

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
    this.props.history.push('/');
  };

  ///Go to Edit Page on "Edit" click
  editMovie = event => {
    let id = this.props.currentMovie.id;
    this.props.history.push(`/edit/${id}`);
  };

  render() {
    console.log(this.props.currentMovie);
    //creates a list of the genres array (key) within currentMovie object
    let genreList = this.props.currentMovie.genres.map((genre, i) => (
      <span key={i}>{genre} </span>
    ));

    return (
      <Paper>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <img
              alt={this.props.currentMovie.id}
              src={this.props.currentMovie.poster}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <h1>{this.props.currentMovie.title}</h1>
            <h3>Genres: {genreList}</h3>
            <p>{this.props.currentMovie.description}</p>
          </Grid>
          <Grid item xs={12}>
            <button onClick={this.returnHome}>Back To List</button>
            <button onClick={this.editMovie}>Edit</button>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

const mapStateToProps = reduxStore => ({
  currentMovie: reduxStore.selected
});

export default withRouter(connect(mapStateToProps)(Details));
