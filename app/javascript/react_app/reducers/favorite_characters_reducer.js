import { FETCH_FAVORITE_CHARACTERS } from '../actions';

export default function (state = null, action) {
  
  switch (action.type) {
    case FETCH_FAVORITE_CHARACTERS:
      return action.payload;
    default:
      return state;
  }
}