import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import SearchComics from './search_comics';

import { fetchComics, fetchComicsNextPage } from '../actions';

class ComicsIndex extends Component {
  componentWillMount() {
    const page = this.props.match.params.page
    this.props.fetchComics(page);
    this.props.fetchComicsNextPage(page);
  }

  render() {
    return (
      <div className="comics-container">
        < SearchComics />
        <div className="pages">

          <div className="last-page">
          {this.props.match.params.page !== "1"
              ? <Link
                  onClick={() => window.location.href = `/comics/page/${parseInt(this.props.match.params.page, 10) - 1}`} className='last-page' >
                  &#60;&#60; {parseInt(this.props.match.params.page, 10) - 1}
                </Link>
              : ""}
          </div>
          <div className="next-page">
            {this.props.comicsNextPage !== null && this.props.comicsNextPage != []
              ? <Link
                  onClick={() => window.location.href = `/comics/page/${parseInt(this.props.match.params.page, 10) + 1}`} className='next-page' >
                  {parseInt(this.props.match.params.page, 10) + 1} &#62;&#62;
                </Link>
              : ""}
          </div>

        </div>
        <div className="comics">
          {/* filter images not available before map*/}
          {this.props.comics.filter(character => character.thumbnail.path.substring(44, 63) !== "image_not_available")
            .map((comic) => {
              return (
              < div key = { comic.id } className = "comic" >
              
                <Link to={`/comics/${comic.id}`} key={comic.id}>
                  < div>
                    <div className="comic-img-div">
                        <img src={`${comic.thumbnail.path}/portrait_uncanny.${comic.thumbnail.extension}`} className="comic-img" />
                      
                    </div>
                    <div className="comic-title">
                        {comic.title.length > 30 ? `${comic.title.slice(0, 30)}...` : comic.title }
                    </div>
                  </div>
                </Link>
                  
              </div>
            );
          })}
        </div>
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
  return bindActionCreators({ fetchComics,fetchComicsNextPage }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ComicsIndex);
