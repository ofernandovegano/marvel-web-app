import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import SearchComics from './search_comics';

import { fetchComics } from '../actions';

class ComicsIndex extends Component {
  componentWillMount() {
    this.props.fetchComics();
  }

  render() {
    return (
      <div className="comics-container">
        <Link to="/">
          <p>Back to Marvel Index</p>
        </Link>
        < SearchComics />
        <div className="comics">
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

  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchComics }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ComicsIndex);
