import md5 from 'md5';
import dotenv from "dotenv";
dotenv.config()

export const FETCH_COMICS = 'FETCH_COMICS';
export const FETCH_COMICS_NEXT_PAGE = 'FETCH_NEXT-COMICS-PAGE';
export const FETCH_CHARACTERS = 'FETCH_CHARACTERS';
export const FETCH_CHARACTERS_NEXT_PAGE = 'FETCH_CHARACTERS_NEXT_PAGE';
export const SEARCH_COMICS = 'SEARCH_COMICS';
export const SEARCH_CHARACTERS = 'SEARCH_CHARACTERS';
export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const DESTROY_FAVORITE_COMIC = 'DESTROY_FAVORITE_COMIC';
export const DESTROY_FAVORITE_CHARACTER = 'DESTROY_FAVORITE_CHARACTER';
export const FETCH_FAVORITE_COMICS = 'FETCH_FAVORITE_COMICS';
export const FETCH_FAVORITE_CHARACTERS = 'FETCH_FAVORITE_CHARACTERS';
export const LAST_PAGE_INDEX = 'LAST_PAGE_INDEX';


console.log(process.env)
const BASE_URL = 'https://gateway.marvel.com/v1/public/';
const REACT_APP_MARVEL_PRIVATE_KEY = process.env.REACT_APP_MARVEL_PRIVATE_KEY;
const REACT_APP_MARVEL_PUBLIC_KEY = process.env.REACT_APP_MARVEL_PUBLIC_KEY;
let timeStamp = Math.floor(Date.now() / 1000)
let md5Key = md5(`${timeStamp}${REACT_APP_MARVEL_PRIVATE_KEY}${REACT_APP_MARVEL_PUBLIC_KEY}`)

// FETCH_COMICS - Comics fetch API
export function fetchComics(page = 1) {
   //offset fetch from page 1 is 0, so 1 * 100 - 100 is zero
  const url = `${BASE_URL}comics?ts=${timeStamp}&apikey=${REACT_APP_MARVEL_PUBLIC_KEY}&hash=${md5Key}&limit=100&offset=${(page-1)*100}`;
  const promise = fetch(url)
    .then(r => r.json());

  return {
    type: FETCH_COMICS,
    payload: promise // Will be resolved by redux-promise
  };
}

// FETCH_COMICS_NEXT_PAGE - Comics fetch API
export function fetchComicsNextPage(page) {
  const url = `${BASE_URL}comics?ts=${timeStamp}&apikey=${REACT_APP_MARVEL_PUBLIC_KEY}&hash=${md5Key}&limit=100&offset=${page*100}`;
  const promise = fetch(url)
    .then(r => r.json());

  return {
    type: FETCH_COMICS_NEXT_PAGE,
    payload: promise // Will be resolved by redux-promise
  };
}


//FETCH_CHARACTERS - Caracters fatch API
export function fetchCharacters(page = 1) {
  const url = `${BASE_URL}characters?ts=${timeStamp}&apikey=${REACT_APP_MARVEL_PUBLIC_KEY}&hash=${md5Key}&limit=100&offset=${(page-1)*100}`;
  const promise = fetch(url)
    .then(r => r.json());

  return {
    type: FETCH_CHARACTERS,
    payload: promise // Will be resolved by redux-promise
  };
}

// FETCH_CHARACTERS_NEXT_PAGE - Characters fetch API
export function fetchCharactersNextPage(page) {
  const url = `${BASE_URL}characters?ts=${timeStamp}&apikey=${REACT_APP_MARVEL_PUBLIC_KEY}&hash=${md5Key}&limit=100&offset=${page*100}`;
  const promise = fetch(url)
    .then(r => r.json());

  return {
    type: FETCH_CHARACTERS_NEXT_PAGE,
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

//DESTROY_FAVORITE_COMIC
export function destroyFavoriteComic(comic, callback) {
  const url = `/api/v1/favorite_comic/${comic.id}`;
  fetch(url,{ method: 'DELETE' }).then(r => r.json())
    .then(() => callback());

  return {
    type: DESTROY_FAVORITE_COMIC,
    payload: comic // Will be resolved by redux-promise
  };
}

//DESTROY_FAVORITE_CHARACTER
export function destroyFavoriteCharacter(character, callback) {
  const url = `/api/v1/favorite_character/${character.id}`;
  fetch(url,{ method: 'DELETE' }).then(r => r.json())
    .then(() => callback());

  return {
    type: DESTROY_FAVORITE_CHARACTER,
    payload: character // Will be resolved by redux-promise
  };
}

export function lastPageIndex(page) {
  return {
    type: LAST_PAGE_INDEX,
    payload: page
  }
}
