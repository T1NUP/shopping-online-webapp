import { GET_API, POST_API, DELETE_API, PUT_API } from "../actions/actions";

export const productList = (state = [], action) => {

  console.log(action);
  console.log(state);

  switch (action.type) {

    case GET_API:
     return [...state, ...action.payload.productList]
    
    case POST_API:
     return [...state, ...[action.payload.product]]
    
    case DELETE_API:
     return state.filter((val) => val.id !== action.payload.id)

    case PUT_API:
     return state

    default:
      return state

  }

}