//REACT IMPORTS
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Details extends Component {
returnHome = (event) => {
    this.props.history.push('/')
}

editMovie = (event) => {
    this.props.history.push('/edit')
}

  render() {
    return (
      <div>
        <p>DETAILS</p>
        <button onClick={this.returnHome}>Back To List</button>
        <button onClick={this.editMovie}>Edit</button>
      </div>
    );
  }
}

export default withRouter(connect()(Details));
