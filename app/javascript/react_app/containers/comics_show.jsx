import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import { addToFavorites } from '../actions';


class ComicsShow extends Component {

  handleClick = () => {
    this.props.addToFavorites(this.props.comic, 'comic', () => {
      this.props.history.push('/comics')});
  }

  render() {
    return (
      <div className="comic-show-container show-container">

        <div className="row">

          <div className="col-12">
            <h1 className="header-show">{ this.props.comic.title }</h1>
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
                {this.props.comic.characters.items[0] ?
                  <div className="info-show-details">
                    <p><strong>characters: </strong></p>
                    {this.props.comic.characters.items.map((character, index) => {
                      return (<span key={character.name} >{(index ? ', ' : "") + character.name}</span>)
                    })}<span>.</span>
                  </div>
                  : ""
                }
                {this.props.comic.stories.items[0] ?
                  <div className="info-show-details">
                    <p><strong>Stories: </strong></p>
                    {this.props.comic.stories.items.map((story, index) => {
                      return (<span key={story.name} >{(index ? ', ' : "") + story.name}</span>)
                    })}<span>.</span>
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
                {this.props.comic.events.items[0] ?
                  <div className="info-show-details">
                    <p><strong>Events: </strong></p>
                    {this.props.comic.events.items.map((event, index) => {
                      return (<span key={event.name} >{(index ? ', ' : "") + event.name}</span>)
                    })}<span>.</span>
                  </div>
                  : ""
                }
                {this.props.comic.creators.items[0] ?
                  <div className="info-show-details">
                    <p><strong>Events: </strong></p>
                    {this.props.comic.creators.items.map((creator, index) => {
                      return (<span key={creator.name} >{(index ? ', ' : "") + creator.name}</span>)
                    })}<span>.</span>
                  </div>
                  : ""
                }

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
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addToFavorites }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ComicsShow));
