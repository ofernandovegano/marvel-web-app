// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory as history } from 'history';

// internal modules
import MarvelIndex from './containers/marvel_index';
import ComicsIndex from './containers/comics_index';
import ComicsShow from './containers/comics_show';
import CharactersIndex from './containers/characters_index';
import CharactersShow from './containers/characters_show';
import UserFavorites from './containers/user_favorites';


//Reducers
import comicsReducer from './reducers/comics_reducer.js';
import comicsNextPageReducer from './reducers/comics_next_page_reducer.js';
import charactersReducer from './reducers/characters_reducer.js';
import charactersNextPageReducer from './reducers/characters_next_page_reducer.js';
import favoriteCharactersReducer from './reducers/favorite_characters_reducer.js';
import favoriteComicsReducer from './reducers/favorite_comics_reducer.js';
import lastPageIndexReducer from './reducers/last_page_index_reducer.js';


// State and reducers
const reducers = combineReducers({
  comics: comicsReducer,
  characters: charactersReducer,
  favoriteCharacters: favoriteCharactersReducer,
  favoriteComics: favoriteComicsReducer,
  comicsNextPage: comicsNextPageReducer,
  charactersNextPage: charactersNextPageReducer,
  lastPageIndex: lastPageIndexReducer
});

//Middlewares
const middlewares = applyMiddleware(reduxPromise, logger);

//div where react will works
const root = document.getElementById('root')

// Initial State
const initialState = {
  comics: [],
  characters: [],
  favoriteComics: JSON.parse(root.dataset.favorite_comics),
  favoriteCharacters: JSON.parse(root.dataset.favorite_characters)
};

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <Router history={history}>
      <div className="view-container">
        <Switch>
          <Route path="/" exact component={MarvelIndex} />
          <Route path="/comics/page/:page" exact component={ComicsIndex} />
          <Route path="/comics/:id" component={ComicsShow} />
          <Route path="/characters/page/:page" exact component={CharactersIndex} />
          <Route path="/characters/:id" exact component={CharactersShow} />
          <Route path="/user_favorites" exact component={UserFavorites} />

        </Switch>
      </div>
    </Router>
  </Provider>,
  root
);