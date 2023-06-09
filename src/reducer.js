import { INCREMENT } from "./actions";
import { DECREMENT } from "./actions";
import { SET } from "./actions";

export const initialState = { count: 0 };

export const reducer = (state = initialState, action) => {
  if (action.type === INCREMENT) {
    return { count: state.count + 1 };
  }

  if (action.type === DECREMENT) {
    if (state.count === 0) {
      return state;
    } else {
      return { count: state.count - 1 };
    }
  }

  if (action.type === SET) {
    return { count: parseInt(action.payload, 10) };
  }
  return state;
};
