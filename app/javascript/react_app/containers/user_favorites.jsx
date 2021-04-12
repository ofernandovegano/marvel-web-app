import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchFavoriteComics, fetchFavoriteCharacters, fetchCharacters, fetchComics, destroyFavoriteComic } from '../actions/index';
import { Link } from 'react-router-dom';

class CharactersIndex extends Component {
  componentWillMount() {
    this.props.fetchCharacters();
    this.props.fetchComics();
  }
  handleDestroyComicClick = (comic) => {
    this.props.destroyFavoriteComic(comic, () => {
      this.props.history.push('/user_favorites')});
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
                      <img src={`${comic.image_url}/portrait_xlarge.${comic.image_type}`} className="comic-img" />
                    </div>
                  </Link>
                  <button onClick={() => this.handleDestroyComicClick(comic)} className="btn btn-danger text-center rounded delete-btn-favorite">Delete</button>
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
                    <img src={`${character.image_url}/standard_large.${character.image_type}`} className="character-img" />
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
  return bindActionCreators({ fetchCharacters, fetchComics, destroyFavoriteComic }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CharactersIndex);