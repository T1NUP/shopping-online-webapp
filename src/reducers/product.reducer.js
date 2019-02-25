import { GET_API, POST_API, DELETE_API, PUT_API } from "../actions/actions";

export const products = (state = [], action) => {

  switch (action.type) {

    case GET_API:
     return [...action.payload.products]
    
    case POST_API:
     return [...state, ...[action.payload.products]]
    
    case DELETE_API:
     return state.filter((val) => val.id !== action.payload.id)
    
    case PUT_API:
     return state.filter((val) => val.id !== action.payload.id)

    default:
      return state

  }

}