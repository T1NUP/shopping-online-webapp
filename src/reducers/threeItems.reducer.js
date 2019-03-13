import { GET_THREE_ITEMS } from '../actions/actions';

export const threeItems = (state = [], action) => {
  switch (action.type) {
    case GET_THREE_ITEMS:
     return [...action.payload.threeItems]
    
    default:
      return state
  }
}