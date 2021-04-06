import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// import ComicsIndex from './comics_index';

import { fetchComics } from '../actions';

class MarvelIndex extends Component {
  componentWillMount() {
    this.props.fetchComics();
  }

  render() {
    return (
      <div className="marvel-container">
        <div className="marvel-index">
          <div className="comics">
            <Link to="/comics">
            <p>To comics index</p>
            </Link>
          </div>
          <div className="characters">
            <Link to="/characters">
              <p>To Characters index</p>
            </Link>
          </div>
        </div>
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
