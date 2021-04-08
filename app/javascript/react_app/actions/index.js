import md5 from 'md5';
import dotenv from "dotenv";
dotenv.config()

export const FETCH_COMICS = 'FETCH_COMICS';
export const FETCH_CHARACTERS = 'FETCH_CHARACTERS';
export const SEARCH_COMICS = 'SEARCH_COMICS';
export const SEARCH_CHARACTERS = 'SEARCH_CHARACTERS';


console.log(process.env)
const BASE_URL = 'https://gateway.marvel.com/v1/public/';
const { REACT_APP_MARVEL_PRIVATE_KEY, REACT_APP_MARVEL_PUBLIC_KEY} = process.env
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

//Search comics
export function searchComics(inputComicsValue) {
  const url = `${BASE_URL}comics?ts=${timeStamp}&apikey=${REACT_APP_MARVEL_PUBLIC_KEY}&hash=${md5Key}&limit=100&titleStartsWith=${inputComicsValue}`;
  const promise = fetch(url)
    .then(r => r.json());

  return {
    type: SEARCH_COMICS,
    payload: promise // Will be resolved by redux-promise
  };
}
//Search characters
export function searchCharacters(inputCharactersValue) {
  const url = `${BASE_URL}characters?ts=${timeStamp}&apikey=${REACT_APP_MARVEL_PUBLIC_KEY}&hash=${md5Key}&limit=100&nameStartsWith=${inputCharactersValue}`;
  const promise = fetch(url)
    .then(r => r.json());

  return {
    type: SEARCH_CHARACTERS,
    payload: promise // Will be resolved by redux-promise
  };
}