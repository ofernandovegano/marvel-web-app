import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


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
        <div className="characters">
            {this.props.characters.map((character) => {
              return (
              < div key = { character.id } className = "character" >
              
                <Link to={`/characters/${character.id}`} key={character.id}>
                  < div>
                    {console.log(character)}
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