import { FETCH_FAVORITE_CHARACTERS, DESTROY_FAVORITE_CHARACTER } from '../actions';

export default function (state = null, action) {
  
  switch (action.type) {
    case FETCH_FAVORITE_CHARACTERS:
      return action.payload;
    case DESTROY_FAVORITE_CHARACTER:
        return state.filter((character) => character !== action.payload);
    default:
      return state;
  }
}