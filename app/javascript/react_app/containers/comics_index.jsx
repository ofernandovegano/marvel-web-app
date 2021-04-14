import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Pagination from '../components/pagination'
import Comic from '../components/comic'

import SearchComics from './search_comics';

import { fetchComics, fetchComicsNextPage, lastPageIndex } from '../actions';

class ComicsIndex extends Component {
  componentWillMount() {
    const page = this.props.match.params.page
    this.props.fetchComics(page);
    this.props.fetchComicsNextPage(page);
    this.props.lastPageIndex(page);
  }

  render() {
    return (
      <div className="comics-container">
        < SearchComics />
        <Pagination id={this.props.match.params.page} key={this.props.match.params.page} page={this.props.match.params.page} nextPage={this.props.comicsNextPage} type='comics'/>
        <div className="comics">
          {/* filter images not available before map*/}
          {this.props.comics.filter(character => character.thumbnail.path.substring(44, 63) !== "image_not_available")
            .map((comic) => {
              return (
              <Comic id={comic.id} key={comic.id} comic={comic}/>
            );
          })}
        </div>
        <Pagination id={this.props.match.params.page} key={this.props.match.params.page} page={this.props.match.params.page} nextPage={this.props.comicsNextPage} type='comics'/>
      </div>
    );
  };
};

function mapStateToProps(state) {
  return {
    comics: state.comics,
    comicsNextPage: state.comicsNextPage
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchComics,fetchComicsNextPage, lastPageIndex }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ComicsIndex);
