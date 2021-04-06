import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


// import { fetchCharacters } from '../actions';

class CharactersIndex extends Component {
  // componentWillMount() {
  //   this.props.fetchComics();
  // }

  render() {
    return (
      <div className="Comics">
        <Link to="/">
          <p>Back to Marvel Index</p>
        </Link>
        <p>Characters Page</p>
      </div>
    );
  };
};

// function mapStateToProps(state) {
//   return {
//     characters: state.characters,

//   };
// }

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchCharacters }, dispatch);
// }

// export default connect(mapStateToProps, mapDispatchToProps)(CharactersIndex);
export default CharactersIndex;
