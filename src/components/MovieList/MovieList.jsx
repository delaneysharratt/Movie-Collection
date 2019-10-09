//REACT IMPORTS
import React, { Component } from 'react';
import { connect } from 'react-redux';

//COMPONENT FOR MOVIE LIST ITEMS IN GRID
import MovieItem from '../MovieItem/MovieItem';

//MATERIAL-UI IMPORTS
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

class MovieList extends Component {
  componentDidMount() {
    this.getMovies();
  }

  getMovies() {
    this.props.dispatch({
      type: 'FETCH_MOVIES'
    });
  }

  render() {
    //for every movie in our movieReducer [] in redux
    //create a movieItem to be rendered to table in dom
    let movieList = this.props.movies.map((movie, i) => {
      return (
        <Grid item key={i} xs={12} sm={6}>
          <MovieItem key={movie.id} movie={movie} />
        </Grid>
      );
    });

    return (
      <Container fixed>
        <Grid container spacing={3}>
          {movieList}
        </Grid>
      </Container>
    );
  }
}

const mapStateToProps = reduxStore => ({
  movies: reduxStore.movies
});

export default connect(mapStateToProps)(MovieList);
