import md5 from 'md5';
import dotenv from "dotenv";
dotenv.config()

export const FETCH_COMICS = 'FETCH_COMICS';

console.log(process.env)
const BASE_URL = 'https://gateway.marvel.com/v1/public/';
const { REACT_APP_MARVEL_PRIVATE_KEY, REACT_APP_MARVEL_PUBLIC_KEY} = process.env
let timeStamp = Math.floor(Date.now() / 1000)
let md5Key = md5(`${timeStamp}${REACT_APP_MARVEL_PRIVATE_KEY}${REACT_APP_MARVEL_PUBLIC_KEY}`)

export function fetchComics() {
  const url = `${BASE_URL}comics?ts=${timeStamp}&apikey=${REACT_APP_MARVEL_PUBLIC_KEY}&hash=${md5Key}&limit=50`;
  const promise = fetch(url)
    .then(r => r.json());

  return {
    type: FETCH_COMICS,
    payload: promise // Will be resolved by redux-promise
  };
}