import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchFavoriteComics, fetchFavoriteCharacters, fetchCharacters, fetchComics } from '../actions/index';
import { Link } from 'react-router-dom';

class CharactersIndex extends Component {
  componentWillMount() {
    this.props.fetchCharacters();
    this.props.fetchComics();
  }

  render() {
    return (
      <div className="favorites-container">
        <h2 className='favorite-comics-header'>Your favorite comics</h2>
        <div className="favorite-comics">
          {this.props.favoriteComics.map((comic) => {
              return (
                < div key={comic.comic_id} className="favorite-comic-img" >
                  <Link to={`/comics/${comic.comic_id}`} key={comic.comic_id}>
                    < div>
                      <div>
                        <img src={`${comic.image_url}/portrait_xlarge.${comic.image_type}`} className="comic-img" />
                      </div>
                    </div>
                  </Link>
              </div>
            );
          })}
        </div>
        <h2 className='favorite-character-header'>Your favorite characters</h2>
        <div className="favorite-characters">
        {this.props.favoriteCharacters.map((character) => {
            return (
              < div key = { character.character_id } className = "favorite-character-img" >
                <Link to={`/characters/${character.character_id}`} key={character.character_id}>
                  < div>
                    <div >
                        <img src={`${character.image_url}/standard_large.${character.image_type}`} className="character-img" />
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
    characters: state.characters,
    favoriteComics: state.favoriteComics,
    favoriteCharacters: state.favoriteCharacters
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCharacters, fetchComics }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CharactersIndex);