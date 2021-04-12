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
        <div className="marvel-comics">
          <Link to="/comics">
          <div className="card-category card-comics">
            COMICS
          </div>
          </Link>
        </div>
        <div className="marvel-characters">
          <Link to="/characters">
            <div className="card-category card-characters">
              CHARACTERS
            </div>
          </Link>
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
