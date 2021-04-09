import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchFavoriteComics, fetchFavoriteCharacters } from '../actions/index';
import { Link } from 'react-router-dom';

class CharactersIndex extends Component {
  componentWillMount() {

  }

  render() {
    return (
      <div className="favorites-container">
 
        <div className="favorite-comics">
          {this.props.favoriteComics
            .map((comic) => {
            return (
              < div key = { comic.id } className = "comic" >
            
              <Link to={`/comics/${comic.id}`} key={comic.id}>
                < div>
                  <div className="comic-img-div">
                      <img src={`${comic.thumbnail.path}/portrait_medium.${comic.thumbnail.extension}`} className="comic-img" />
                    
                  </div>
                  <div className="comic-name">
                      {comic.name.length > 30 ? `${character.name.slice(0, 30)}...` : character.name }
                  </div>
                </div>
              </Link>
                
              </div>
            );
          })}
        </div>
        <div className="favorite-characters">
          {this.props.favoriteCharacters
            .map((character) => {
            return (
              < div key = { character.id } className = "character" >
            
              <Link to={`/characters/${character.id}`} key={character.id}>
                < div>
                  <div className="character-img-div">
                      <img src={`${character.thumbnail.path}/standard_medium.${character.thumbnail.extension}`} className="character-img" />
                    
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
    favoriteComics: state.favoriteComics,
    favoriteCharacters: state.favoriteCharacters

  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchFavoriteComics, fetchFavoriteCharacters }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CharactersIndex);