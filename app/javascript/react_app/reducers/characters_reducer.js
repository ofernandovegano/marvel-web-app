import { FETCH_CHARACTERS, SEARCH_CHARACTERS } from '../actions';

export default function (state = null, action) {
  
  switch (action.type) {
    case FETCH_CHARACTERS:
      return action.payload.data.results;
    case SEARCH_CHARACTERS:
      return action.payload.data.results;
    default:
      return state;
  }
}