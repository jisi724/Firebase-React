import { FETCH_TODOS } from "../actions/types";

const INITIAL_STATE = {
  todos: null
};

const todoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_TODOS:
      return {
        ...state,
        todos: action.payload
      };
    default:
      return state;
  }
};

export default todoReducer;
