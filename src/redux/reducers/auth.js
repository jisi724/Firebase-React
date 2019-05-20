import types from "../actions/types";

const INITIAL_STATE = {
  loading: true,
  profile: null,
  error: null
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH_CURRENT_USER_SUCCESS:
      return {
        ...state,
        profile: action.payload,
        loading: false
      };
    case types.FETCH_CURRENT_USER_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false
      };
    default:
      return state;
  }
};

export default authReducer;
