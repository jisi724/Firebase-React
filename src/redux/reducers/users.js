import types from "../actions/types";

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: null
};

const usersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH_ALL_USERS_LOADING:
      return {
        ...state,
        loading: true,
        error: null
      };
    case types.FETCH_ALL_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case types.FETCH_ALL_USERS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
};

export default usersReducer;
