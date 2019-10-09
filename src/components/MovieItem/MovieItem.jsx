//REACT IMPORTS
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

//MATERIAL-UI IMPORTS
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
    maxHeight: 500,
    height: 500
  },
  movie: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center'
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%'
  },
  description: {
    maxHeight: 300,
    height: 275,
    overflow: 'scroll'
  }
});

class MovieItem extends Component {
  seeDetails = event => {
    let id = this.props.movie.id;
    this.props.history.push(`/details/${id}`);
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container spacing={2} className={classes.movie}>
            <Grid item xs={12} sm={6} textAlign="center">
              <Box textAlign="center">
                <img
                  alt={this.props.movie.title}
                  src={this.props.movie.poster}
                  onClick={this.seeDetails}
                  className="movie-poster"
                />
              </Box>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Box textAlign="center" m={1}>
                <Typography variant="h4" gutterBottom>
                  {this.props.movie.title}
                </Typography>
              </Box>

              <Box m={2} className={classes.description}>
                <Typography variant="body2">
                  {this.props.movie.description}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }
}

export default withRouter(connect()(withStyles(styles)(MovieItem)));
