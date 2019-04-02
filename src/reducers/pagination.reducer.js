import * as type from './../actions/actions';

export const pagination = (state = 1, action) => {
  switch (action.type) {
    case type.PAGINATION:
      return action.payload.current;
    default:
      return state;
  }
};
