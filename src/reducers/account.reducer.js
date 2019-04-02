import { GET_ACCOUNT } from '../actions/actions';

export const accounts = (state = [], action) => {
  switch (action.type) {
    case GET_ACCOUNT:
      return [...action.payload.accounts];
    default:
      return state;
  }
};
