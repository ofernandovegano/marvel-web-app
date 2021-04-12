import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

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
        <div className="pages">

          <div className="last-page">
          {this.props.match.params.page !== "1"
              ? <Link
                  onClick={() => window.location.href = `/characters/page/${parseInt(this.props.match.params.page, 10) - 1}`} className='last-page' >
                  &#60;&#60; {parseInt(this.props.match.params.page, 10) - 1}
                </Link>
              : ""}
          </div>
          <div className="next-page">
            {this.props.charactersNextPage !== null && this.props.charactersNextPage != []
              ? <Link
                  onClick={() => window.location.href = `/characters/page/${parseInt(this.props.match.params.page, 10) + 1}`} className='next-page' >
                  {parseInt(this.props.match.params.page, 10) + 1} &#62;&#62;
                </Link>
              : ""}
          </div>

        </div>
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
        <div className="pages">

          <div className="last-page">
          {this.props.match.params.page !== "1"
              ? <Link
                  onClick={() => window.location.href = `/characters/page/${parseInt(this.props.match.params.page, 10) - 1}`} className='last-page' >
                  &#60;&#60; {parseInt(this.props.match.params.page, 10) - 1}
                </Link>
              : ""}
          </div>
          <div className="next-page">
            {this.props.charactersNextPage !== null && this.props.charactersNextPage != []
              ? <Link
                  onClick={() => window.location.href = `/characters/page/${parseInt(this.props.match.params.page, 10) + 1}`} className='next-page' >
                  {parseInt(this.props.match.params.page, 10) + 1} &#62;&#62;
                </Link>
              : ""}
          </div>

        </div>
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