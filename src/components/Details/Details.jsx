//REACT IMPORTS
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

//MATERIAL-UI IMPORTS
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

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
            <Typography variant="h2" gutterBottom>
              {this.props.currentMovie.title}
            </Typography>
            <Typography variant="h5" gutterBottom>
              Genres: {genreList}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {this.props.currentMovie.description}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              onClick={this.returnHome}
            >
              Back To List
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={this.editMovie}
            >
              Edit
            </Button>
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
