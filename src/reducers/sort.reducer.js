import * as type from './../actions/actions';

const initialState = {
  sort: 'default',
  show: 3
};
export const sort = (state = initialState, action) => {
  switch (action.type) {
    case type.SORT:
      return {
        ...state,
        sort: action.payload.sort
      };

    case type.SHOW:
      return {
        ...state,
        show: action.payload.show
      };

    default:
      return state;
  }
};
