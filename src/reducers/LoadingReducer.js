export const loading = (state = false, action) => {
  switch (action.type) {
    case "SHOW_LOADING":
      return action.payload.loading;

    case "HIDE_LOADING":
      return action.payload.loading;

    default:
      return state;
  }
}