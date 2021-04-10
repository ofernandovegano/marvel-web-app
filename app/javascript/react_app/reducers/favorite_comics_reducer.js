import { FETCH_FAVORITE_COMICS } from '../actions';

export default function (state = null, action) {
  
  switch (action.type) {
    case FETCH_FAVORITE_COMICS:
      return action.payload;
    default:
      return state;
  }
}