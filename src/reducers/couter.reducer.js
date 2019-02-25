import { DECREASE, INCREASE } from "../actions/actions";

export const counter = (state = 0, action) => {
  const step = action.payload;
  switch (action.type) {
    case INCREASE:
     return state + step.step

    case DECREASE:
     return state - step.step

    default:
      return state;
  }
}