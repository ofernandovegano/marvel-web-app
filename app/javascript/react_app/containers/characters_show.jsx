import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import { addToFavorites } from '../actions';


class CharactersShow extends Component {
  handleClick = () => {
    this.props.addToFavorites(this.props.character, 'character', () => {
      this.props.history.push('/characters')});
  }

  render() {
    return (
      <div className="character-show-container show-container">
        <Link to="/characters">
          <p>Back to Characters</p>
        </Link>
        <div className="row">
          
          <div className="col-12">
            <h1 className="header-show">{ this.props.character.name }</h1>
          </div>

          <div className="col-4 img-show">
            <img src={`${this.props.character.thumbnail.path}/standard_fantastic.${this.props.character.thumbnail.extension}`} className="character-img start-img-show"/>
          </div>

          <div className="col-8 show-info">
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
                { this.props.character.description ? 
                  <div className="info-show-details">
                    <strong>Description: </strong><span>{this.props.character.description}</span>
                  </div>
                  : ""
                }
                {this.props.character.comics.items[0] ?
                  <div className="info-show-details">
                    <span><strong>Comics: </strong></span>
                    {this.props.character.comics.items.map((comic, index) => {
                      return (<span key={comic.name} >{(index ? ', ' : "") + comic.name}</span>)
                    })}<span>.</span>
                  </div>
                  : ""
                }
                {this.props.character.stories.items[0] ?
                  <div className="info-show-details">
                    <span><strong>Stories: </strong></span>
                    {this.props.character.stories.items.map((story, index) => {
                      return (<span key={story.name} >{(index ? ', ' : "") + story.name}</span>)
                    })}<span>.</span>
                  </div>
                  : ""
                }
                {this.props.character.series.items[0] ?
                  <div className="info-show-details">
                    <span><strong>Series: </strong></span>
                    {this.props.character.series.items.map((serie, index) => {
                      return (<span key={serie.name} >{(index ? ', ' : "") + serie.name}</span>)
                    })}<span>.</span>
                  </div>
                  : ""
                }
                {this.props.character.events.items[0] ?
                  <div className="info-show-details">
                    <span><strong>Events: </strong></span>
                    {this.props.character.events.items.map((event, index) => {
                      return (<span key={event.name} >{(index ? ', ' : "") + event.name}</span>)
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
    character: state.characters.find((character) => character.id === id),
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addToFavorites }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CharactersShow));
