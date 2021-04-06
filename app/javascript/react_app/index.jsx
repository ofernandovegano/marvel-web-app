// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createHistory as history } from 'history';

// internal modules
import MarvelIndex from './containers/marvel_index';
import ComicsIndex from './containers/comics_index';
import ComicsShow from './containers/comics_show';
import CharactersIndex from './containers/characters_index';


//Reducers
import comicsReducer from './reducers/comics_reducer.js';
import charactersReducer from './reducers/characters_reducer.js';

// Initial State
const initialState = {
  comics: [],
  characters: []
};

// State and reducers
const reducers = combineReducers({
  comics: comicsReducer,
  characters: charactersReducer
});

//Middlewares
const middlewares = applyMiddleware(reduxPromise, logger);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <Router history={history}>
      <div className="view-container">
        <Switch>
          <Route path="/" exact component={MarvelIndex} />
          <Route path="/comics" exact component={ComicsIndex} />
          <Route path="/comics/:id" component={ComicsShow} />
          <Route path="/characters" exact component={CharactersIndex} />
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);