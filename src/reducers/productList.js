import { GET_API, POST_API, DELETE_API, PUT_API } from "../actions/actions";

export const productList = (state = [], action) => {
  console.log(action);
  switch (action.type) {

    case GET_API:
     return [...action.payload.productList]
    
    case POST_API:
     return state.concat(action.payload.productList)
    
    case DELETE_API:
     return state

    default:
      return state;
  }
}