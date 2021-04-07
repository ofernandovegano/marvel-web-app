import { FETCH_CHARACTERS } from '../actions';

export default function (state = null, action) {
  
  switch (action.type) {
    case FETCH_CHARACTERS:
      return action.payload.data.results;
    default:
      return state;
  }
}