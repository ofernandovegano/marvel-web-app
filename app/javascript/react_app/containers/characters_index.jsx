import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Pagination from '../components/pagination'

import SearchCharacters from './search_characters';


import { fetchCharacters, fetchCharactersNextPage, lastPageIndex } from '../actions';

class CharactersIndex extends Component {
  componentWillMount() {
    const page = this.props.match.params.page
    this.props.fetchCharacters(page);
    this.props.fetchCharactersNextPage(page);
    this.props.lastPageIndex(page);
  }

  render() {
    return (
      <div className="characters-container">
        < SearchCharacters />
        <Pagination id={this.props.match.params.page} key={this.props.match.params.page} page={this.props.match.params.page} nextPage={this.props.charactersNextPage} type='characters'/>
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
        <Pagination id={this.props.match.params.page} key={this.props.match.params.page} page={this.props.match.params.page} nextPage={this.props.charactersNextPage} type='characters'/>
      </div>
    );
  };
};

function mapStateToProps(state) {
  return {
    characters: state.characters,
    charactersNextPage: state.charactersNextPage
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCharacters, fetchCharactersNextPage, lastPageIndex }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CharactersIndex);