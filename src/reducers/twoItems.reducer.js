import { GET_TWO_ITEMS } from '../actions/actions';

export const twoItems = (state = [], action) => {
  switch (action.type) {
    case GET_TWO_ITEMS:
     return [...action.payload.twoItems]
    
    default:
      return state
  }
}