import types from "../actions/types";

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: null
};

const todoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH_TODOS_LOADING:
      return {
        ...state,
        loading: true,
        error: null
      };
    case types.FETCH_TODOS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case types.FETCH_TODOS_FAILURE:
    case types.ADD_TODOS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
};

export default todoReducer;
