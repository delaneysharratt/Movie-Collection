//REACT IMPORTS
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

//MATERIAL-UI IMPORTS
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    flexGrow: 1,
    maxHeight: '100%'
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto'
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%'
  },
  description: {
    maxHeight: '60%',
    overflow: 'scroll'
  },
  buttons: {
    display: 'inline-flex',
    justifyContent: 'space-around',
    width: '50%',
    margin: '0 25%'
  }
});

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
    const { classes } = this.props;

    console.log(this.props.currentMovie);
    //creates a list of the genres array (key) within currentMovie object
    let genreList = this.props.currentMovie.genres.map((genre, i) => (
      <span key={i}>{genre} </span>
    ));

    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={3}>
              <Box textAlign="center">
                <img
                  alt={this.props.currentMovie.id}
                  src={this.props.currentMovie.poster}
                  className={classes.img}
                />
              </Box>
            </Grid>

            <Grid item xs={12} sm={9}>
              <Box textAlign="center">
                <Typography variant="h2" gutterBottom>
                  {this.props.currentMovie.title}
                </Typography>

                <Typography variant="h5" gutterBottom>
                  Genres: {genreList}
                </Typography>
              </Box>

              <Box className={classes.description}>
                <Typography variant="body1" gutterBottom>
                  {this.props.currentMovie.description}
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12}>
              <Box textAlign="center" className={classes.buttons}>
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
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = reduxStore => ({
  currentMovie: reduxStore.selected
});

export default withRouter(
  connect(mapStateToProps)(withStyles(styles)(Details))
);
