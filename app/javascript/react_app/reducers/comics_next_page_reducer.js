
import { FETCH_COMICS_NEXT_PAGE } from '../actions';

export default function (state = null, action) {
  
  switch (action.type) {
    case FETCH_COMICS_NEXT_PAGE:
      return action.payload.data.results;
    default:
      return state;
  }
}