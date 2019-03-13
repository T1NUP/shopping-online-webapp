import { GET_NEW_ARRIVALS } from "../actions/actions";

export const newArrivals = (state = [], action) => {
  switch (action.type) {
    case GET_NEW_ARRIVALS:
     return [...action.payload.newArrivals]
    
    default:
      return state
  }
}