import { GET_ABOUT } from "../actions/actions";

export const abouts = (state = [], action) => {
  switch (action.type) {
    case GET_ABOUT:
     return [...action.payload.abouts]
    
    default:
      return state
  }
}