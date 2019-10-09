//REACT IMPORTS
import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

//STYLING IMPORTS
import './App.css';
import 'typeface-roboto';

//COMPONENT IMPORTS
import MovieList from '../MovieList/MovieList';
import Details from '../Details/Details';
import Edit from '../Edit/Edit';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path="/" component={MovieList} />
          <Route path="/details/:id" component={Details} />
          <Route path="/edit/:id" component={Edit} />
        </Router>
      </div>
    );
  }
}

export default App;
