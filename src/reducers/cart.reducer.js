import { GET_CART, DELETE_CART_ITEM } from '../actions/actions';

export const carts = (state = [], action) => {
  switch (action.type) {
    case GET_CART:
      return [...action.payload.carts];
    case DELETE_CART_ITEM:
      let deleteCart = state.filter(cart => {
        return cart.id !== action.payload.cartId;
      });
      return deleteCart;
    default:
      return state;
  }
};
