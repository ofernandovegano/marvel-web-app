import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import SearchComics from './search_comics';

class ComicsShow extends Component {


  render() {
    if (!car) {
    return (
      <Link to="/comics">Back to Comics</Link>
    }
    return (
      <div className="comic-show-container">
        {const comic = this.props.comic}
        <Link to="/comics">
          <p>Back to Comics</p>
        </Link>

        < SearchComics />

        <div className="comic-show">

          { comic.title }
          
        < div>

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

{/* function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addToFavorites }, dispatch);
} */}

export default withRouter(connect(mapStateToProps, null)(ComicsShow));
