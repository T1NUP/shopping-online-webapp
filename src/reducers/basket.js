export const basket = (state = [], action) => {
  switch (action.type) {
    case "BASKET_ADD_PRODUCT":
      return [];

    case "BASKET_REMOVE_PRODUCT":
      return [];

    default:
      return state;
  }
}