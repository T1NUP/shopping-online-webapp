import { GET_BEST_SELLER } from "../actions/actions";

export const bestSellers = (state = [], action) => {
  switch (action.type) {
    case GET_BEST_SELLER:
      return [...action.payload.bestSellers];

    default:
      return state;
  }
};
