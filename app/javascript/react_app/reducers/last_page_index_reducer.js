import { LAST_PAGE_INDEX } from '../actions';

export default function (state = null, action) {
  
  switch (action.type) {
    case LAST_PAGE_INDEX:
      return action.payload;
    default:
      return state;
  }
}