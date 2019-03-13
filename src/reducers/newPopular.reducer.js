import { GET_NEW_POPULAR } from '../actions/actions';

export const newPopular = (state = [], action) => {
  switch (action.type) {
    case GET_NEW_POPULAR:
     return [...action.payload.newPopular]
    
    default:
      return state
  }
}