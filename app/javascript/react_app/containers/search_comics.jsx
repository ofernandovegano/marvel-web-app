import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { searchComics } from '../actions/index';

class SearchComics extends Component {
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
    this.props.searchComics(this.state.value);
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
            className="form-control search-index"
            autoComplete="off"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </div>
        <div className="col-2">
          <button type="submit" className='btn btn-light btn-search'>Search Comics</button>
        </div>
      </div>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    comics: state.comics,

  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ searchComics }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchComics);