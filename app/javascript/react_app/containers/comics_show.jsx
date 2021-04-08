import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import SearchComics from './search_comics';

import { addToFavorites } from '../actions';


class ComicsShow extends Component {

  handleClick = () => {
    this.props.addToFavorites(this.props.comic, 'comic', () => {
      this.props.history.push('/')});
  }

  render() {
    return (
      <div className="comic-show-container">
        <Link to="/comics">
          <p>Back to Comics</p>
        </Link>

        < SearchComics />

        <div className="comic-show">

          { this.props.comic.title }
          
        </div>

        <button onClick={ this.handleClick }>Add To Favorites</button>

      </div>
    );
  };
};

function mapStateToProps(state, ownProps) {
  const id = parseInt(ownProps.match.params.id);
  return {
    comic: state.comics.find((comic) => comic.id === id),
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addToFavorites }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ComicsShow));
