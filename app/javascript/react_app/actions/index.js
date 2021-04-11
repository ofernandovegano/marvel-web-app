import md5 from 'md5';
import dotenv from "dotenv";
dotenv.config()

export const FETCH_COMICS = 'FETCH_COMICS';
export const FETCH_CHARACTERS = 'FETCH_CHARACTERS';
export const SEARCH_COMICS = 'SEARCH_COMICS';
export const SEARCH_CHARACTERS = 'SEARCH_CHARACTERS';
export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const FETCH_FAVORITE_COMICS = 'FETCH_FAVORITE_COMICS';
export const FETCH_FAVORITE_CHARACTERS = 'FETCH_FAVORITE_CHARACTERS';


console.log(process.env)
const BASE_URL = 'https://gateway.marvel.com/v1/public/';
const REACT_APP_MARVEL_PRIVATE_KEY = process.env.REACT_APP_MARVEL_PRIVATE_KEY;
const REACT_APP_MARVEL_PUBLIC_KEY = process.env.REACT_APP_MARVEL_PUBLIC_KEY;
let timeStamp = Math.floor(Date.now() / 1000)
let md5Key = md5(`${timeStamp}${REACT_APP_MARVEL_PRIVATE_KEY}${REACT_APP_MARVEL_PUBLIC_KEY}`)

// FETCH_COMICS - Comics fetch API
export function fetchComics() {
  const url = `${BASE_URL}comics?ts=${timeStamp}&apikey=${REACT_APP_MARVEL_PUBLIC_KEY}&hash=${md5Key}&limit=100`;
  const promise = fetch(url)
    .then(r => r.json());

  return {
    type: FETCH_COMICS,
    payload: promise // Will be resolved by redux-promise
  };
}


//FETCH_CHARACTERS - Caracters fatch API
export function fetchCharacters() {
  const url = `${BASE_URL}characters?ts=${timeStamp}&apikey=${REACT_APP_MARVEL_PUBLIC_KEY}&hash=${md5Key}&limit=100`;
  const promise = fetch(url)
    .then(r => r.json());

  return {
    type: FETCH_CHARACTERS,
    payload: promise // Will be resolved by redux-promise
  };
}

//SEARCH_COMICS
export function searchComics(inputComicsValue) {
  const url = `${BASE_URL}comics?ts=${timeStamp}&apikey=${REACT_APP_MARVEL_PUBLIC_KEY}&hash=${md5Key}&limit=100&titleStartsWith=${inputComicsValue}`;
  const promise = fetch(url)
    .then(r => r.json());

  return {
    type: SEARCH_COMICS,
    payload: promise // Will be resolved by redux-promise
  };
}
//SEARCH_CHARACTERS
export function searchCharacters(inputCharactersValue) {
  const url = `${BASE_URL}characters?ts=${timeStamp}&apikey=${REACT_APP_MARVEL_PUBLIC_KEY}&hash=${md5Key}&limit=100&nameStartsWith=${inputCharactersValue}`;
  const promise = fetch(url)
    .then(r => r.json());

  return {
    type: SEARCH_CHARACTERS,
    payload: promise // Will be resolved by redux-promise
  };
}

//ADD_TO_FAVORITES
export function addToFavorites(data, favoriteType, callback) {
  const url = `/api/v1/favorite_${favoriteType}`;
  const body = { id: data.id, image_url: data.thumbnail.path, image_type: data.thumbnail.extension };
  const request = fetch(url,{
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(r => r.json())
    .then(() => callback());

  return {
    type: ADD_TO_FAVORITES,
    payload: request // Will be resolved by redux-promise
  };
}


//FETCH_FAVORITE_COMICS
export function fetchFavoriteComics() {
  const promise = fetch('/api/v1/favorite_comics')
    .then(r => r.json());
  
  return {
    type: FETCH_FAVORITE_COMICS,
    payload: promise // Will be resolved by redux-promise
  }
}

//FETCH_FAVORITE_CHARACTERS
export function fetchFavoriteCharacters() {
  const promise = fetch('/api/v1/favorite_characters')
    .then(r => r.json());
  
  return {
    type: FETCH_FAVORITE_CHARACTERS,
    payload: promise // Will be resolved by redux-promise
  }
}