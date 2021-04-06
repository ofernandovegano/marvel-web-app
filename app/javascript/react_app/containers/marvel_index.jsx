import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchComics } from '../actions';

class MarvelIndex extends Component {
  componentWillMount() {
    this.props.fetchComics();
  }

  render() {
    return (
      <div className="marvel">
        <p>React + Redux starter</p>
      </div>
    );
  };
};

function mapStateToProps(state) {
  return {
    comics: state.comics,

  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchComics }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MarvelIndex);
