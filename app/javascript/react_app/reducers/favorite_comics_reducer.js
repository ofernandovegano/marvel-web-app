import { FETCH_FAVORITE_COMICS, DESTROY_FAVORITE_COMIC } from '../actions';

export default function (state = null, action) {
  
  switch (action.type) {
    case FETCH_FAVORITE_COMICS:
      return action.payload;
    case DESTROY_FAVORITE_COMIC:
        return state.filter((comic) => comic !== action.payload);
    default:
      return state;
  }
}