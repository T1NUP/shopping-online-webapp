import { GET_API, POST_API, DELETE_API, PUT_API } from "../actions/actions";

export const productList = (state = [], action) => {

  switch (action.type) {

    case GET_API:
     return [...action.payload.productList]
    
    case POST_API:
     return [...state, ...[action.payload.product]]
    
    case DELETE_API:
     return state.filter((val) => val.id !== action.payload.id)

    default:
      return state

  }

}