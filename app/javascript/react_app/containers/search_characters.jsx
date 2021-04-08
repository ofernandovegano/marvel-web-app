import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { searchCharacters } from '../actions/index';

class SearchCharacters extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  componentDidMount() {
    this.inputBox.focus();
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.searchCharacters(this.state.value);
    this.setState({ value: '' });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="search-form">
      <div className="row search-row">
        <div className="col-6">
          <input
            ref={input => this.inputBox = input}
            type="text"
            className="form-control"
            autoComplete="off"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </div>
        <div className="col-2">
          <button type="submit" class='btn btn-light btn-search'>Serch Characters</button>
        </div>
      </div>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    characters: state.characters,

  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ searchCharacters }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchCharacters);