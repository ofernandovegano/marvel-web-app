import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import { addToFavorites } from '../actions';

import ComicInfoDescription from '../components/comic_info_description'


class ComicsShow extends Component {

  handleClick = () => {
    this.props.addToFavorites(this.props.comic, 'comic', () => {
      this.props.history.push(`/comics/page/${this.props.lastPageIndex}`)});
  }

  render() {
    return (
      <div className="comic-show-container show-container">

        <div className="row">

          <div className="col-12">
            <h1 className="header-show">{ this.props.comic.title }</h1>
          </div>
          <div className="col-12">
            <Link onClick={() => window.location.href = `/comics/page/${this.props.lastPageIndex}`}>Back to index</Link>
          </div>
          <div className="col-12 col-lg-4 img-show">
            <img src={`${this.props.comic.thumbnail.path}/portrait_uncanny.${this.props.comic.thumbnail.extension}`} className="comic-img-show start-img-show"/>
          </div>

          <div className="col-12 col-lg-8 show-info">
            <div className="col-12">
              <div className="description-and-btn-header">
                <div>
                  <h2 className="about-header">About</h2>
                </div>
                
                <div>
                  <button onClick={this.handleClick} className="btn-add-to-favorites">Add To Favorites</button>
                </div>
              </div>
              <div className="info-show">
                { this.props.comic.description ? 
                  <div className="info-show-details">
                    <p><strong>Description: </strong></p><span>{this.props.comic.description}</span>
                  </div>
                  : ""
                }
                {this.props.comic.series.name ?
                  <div className="info-show-details">
                    <p><strong>Series: </strong></p>
                    {this.props.comic.series.name}
                  </div>
                  : ""
                }
                < ComicInfoDescription key={ this.props.comic.characters.items } id= { this.props.comic.characters.items } info={this.props.comic.characters.items} typeDescription='Characters' />
                < ComicInfoDescription key={ this.props.comic.stories.items } id= { this.props.comic.stories.items } info={this.props.comic.stories.items} typeDescription='Stories' />
                < ComicInfoDescription key={ this.props.comic.events.items } id= { this.props.comic.events.items } info={this.props.comic.events.items} typeDescription='Events' />
                < ComicInfoDescription key={ this.props.comic.creators.items } id= { this.props.comic.creators.items } info={this.props.comic.creators.items} typeDescription='Creators' />
              </div>
            </div>          
          </div>
        </div>
      </div>
    );
  };
};

function mapStateToProps(state, ownProps) {
  const id = parseInt(ownProps.match.params.id);
  return {
    comic: state.comics.find((comic) => comic.id === id),
    lastPageIndex: state.lastPageIndex
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addToFavorites }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ComicsShow));
