import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import BannerIndex from '../components/banner_index'

import { fetchComics } from '../actions';

class MarvelIndex extends Component {
  componentWillMount() {
    this.props.fetchComics();
  }

  render() {
    return (
      <div className="marvel-container">
        <BannerIndex key='comics' id='comics' bannerType='comics' />
        <BannerIndex key='characters' id='characters' bannerType='characters' />
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
