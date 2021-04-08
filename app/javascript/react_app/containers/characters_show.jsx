import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import SearchCharacters from './search_characters';

import { addToFavorites } from '../actions';


class CharactersShow extends Component {

  handleClick = () => {
    this.props.addToFavorites(this.props.character, 'character', () => {
      this.props.history.push('/characters')});
  }

  render() {
    return (
      <div className="character-show-container">
        <Link to="/characters">
          <p>Back to Characters</p>
        </Link>

        < SearchCharacters />

        <div className="character-show">

          { this.props.character.name }
          
        </div>

        <button onClick={ this.handleClick }>Add To Favorites</button>

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
