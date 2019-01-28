export const productList = (state = [], action) => {
  switch (action.type) {
    case "REMOVE_PRODUCT":
     return {
      ...state
     }

    default:
      return state;
  }
}