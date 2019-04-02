import { LOG_IN } from "../actions/actions";

export const login = (state = {}, action) => {
  switch (action.type) {
    case LOG_IN:
      return [...action.payload.login];
    default:
      return state;
  }
};
