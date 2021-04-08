import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import SearchCharacters from './search_characters';


import { fetchCharacters } from '../actions';

class CharactersIndex extends Component {
  componentWillMount() {
    this.props.fetchCharacters();
  }

  render() {
    return (
      <div className="characters-container">
        <Link to="/">
          <p>Back to Marvel Index</p>
        </Link>
        < SearchCharacters />
        <div className="characters">
          {/* filter images not available before map: "4c002e0305708" is a picture that shows "image not available" */}
          {this.props.characters.filter(character => character.thumbnail.path.substring(44, 63) !== "image_not_available")
              .filter(character => character.thumbnail.path.substring(44, 63) !== "4c002e0305708") 
            .map((character) => {
            return (
              < div key = { character.id } className = "character" >
            
              <Link to={`/characters/${character.id}`} key={character.id}>
                < div>
                  <div className="character-img-div">
                      <img src={`${character.thumbnail.path}/standard_fantastic.${character.thumbnail.extension}`} className="character-img" />
                    
                  </div>
                  <div className="character-name">
                      {character.name.length > 30 ? `${character.name.slice(0, 30)}...` : character.name }
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
    characters: state.characters,

  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCharacters }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CharactersIndex);