import { REGISTER } from "../actions/actions";

export const register = (state = false, action) => {
  switch (action.type) {
    case REGISTER:
      return true;

    default:
      return state;
  }
};
