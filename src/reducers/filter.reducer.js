import * as type from './../actions/actions';

const initialState = {
  not_available: false,
  in_stock: false,
  price_from: 0,
  price_to: 100
};
export const filter = (state = initialState, action) => {
  switch (action.type) {
    case type.GET_NOT_AVAILABLE:
      return {
        ...state,
        not_available: action.payload.not_available
      };

    case type.GET_IN_STOCK:
      return {
        ...state,
        in_stock: action.payload.in_stock
      };
    case type.RANGE:
      return {
        ...state,
        price_from: action.payload.price_from,
        price_to: action.payload.price_to
      };
    default:
      return state;
  }
};
