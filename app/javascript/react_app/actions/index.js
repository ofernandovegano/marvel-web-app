import md5 from 'md5';
import dotenv from "dotenv";
dotenv.config()

const BASE_URL = 'https://gateway.marvel.com/v1/public/';
const { REACT_APP_MARVEL_PRIVATE_KEY, REACT_APP_MARVEL_PUBLIC_KEY} = process.env

let timeStamp = Math.floor(Date.now() / 1000)
let md5Key = md5(`${timeStamp}99291e7c16ca458a2fc32c8809f5ab3556b5503d03c7ac852c30b7d1ffc2c38bd991f0d4`)
console.log(Date.now())
console.log(process.env)


export function fetchComics() {
  const url = `${BASE_URL}comics?ts=${timeStamp}&apikey=03c7ac852c30b7d1ffc2c38bd991f0d4&hash=${md5Key}`;
  const promise = fetch(url)
    .then(r => r.json());

  return {
    type: 'FETCH_COMICS',
    payload: promise // Will be resolved by redux-promise
  };
}