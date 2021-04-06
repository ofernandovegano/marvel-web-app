import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


import { fetchComics } from '../actions';

class ComicsIndex extends Component {
  componentWillMount() {
    this.props.fetchComics();
  }

  render() {
    return (
      <div className="Comics">
        <Link to="/">
          <p>Back to Marvel Index</p>
        </Link>
        <p>Comics Page</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(ComicsIndex);
