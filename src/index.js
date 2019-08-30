/** ---------- REACT IMPORTS ---------- **/
import React from 'react';
import ReactDOM from 'react-dom';
//application component
import App from './components/App/App.js';
//For communicating server-side
import axios from 'axios';
//styling import
import './index.css';
//still don't know exactly what this one's for... *shrug*
import registerServiceWorker from './registerServiceWorker';

/** ---------- REDUX IMPORTS ---------- **/
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
//For use in our rootSaga/watcherSaga
import { takeEvery, put } from 'redux-saga/effects';

/** ---------- SAGA GENERATOR FUNCTIONS ---------- **/
//watches for all incoming action types, sends matches to generators
function* rootSaga() {
  yield takeEvery('FETCH_MOVIES', fetchMovies);
}

//
function* fetchMovies() {
  try {
    let movie = yield axios.get('/api/movie');
    console.log('SAGA response:', movie);
    yield put({
      type: 'SET_MOVIES',
      payload: movie.data
    });
  } catch (err) {
    console.log('Err in GET:', err);
  }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
  switch (action.type) {
    case 'SET_MOVIES':
      return action.payload;
    default:
      return state;
  }
};

// Used to store the movie genres
const genres = (state = [], action) => {
  switch (action.type) {
    case 'SET_GENRES':
      return action.payload;
    default:
      return state;
  }
};

// Create one store that all components can use
const storeInstance = createStore(
  combineReducers({
    movies,
    genres
  }),
  // Add sagaMiddleware to our store
  applyMiddleware(sagaMiddleware, logger)
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
