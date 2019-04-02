import { GET_CONTACT } from "../actions/actions";

export const contacts = (state = [], action) => {
  switch (action.type) {
    case GET_CONTACT:
     return [...action.payload.contacts]
    
    default:
      return state
  }
}