import { FETCH_COMICS, SEARCH_COMICS } from '../actions';

export default function (state = null, action) {
  
  switch (action.type) {
    case FETCH_COMICS:
      return action.payload.data.results;
    case SEARCH_COMICS:
      return action.payload.data.results;
    default:
      return state;
  }
}