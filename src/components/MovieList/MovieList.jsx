//REACT IMPORTS
import React, { Component } from 'react';
import { connect } from 'react-redux';

//COMPONENT FOR MOVIE LIST ITEMS IN TABLE
import MovieItem from '../MovieItem/MovieItem';

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
    let movieList = this.props.movies.map(movie => {
      return <MovieItem key={movie.id} movie={movie} />;
    });

    return (
      <div>
        <table>
          <tbody>{movieList}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = reduxStore => ({
  movies: reduxStore.movies
});

export default connect(mapStateToProps)(MovieList);
