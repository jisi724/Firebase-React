import { combineReducers } from "redux";
import todoReducer from "./todo";
import authReducer from "./auth";
import usersReducer from "./users";

const rootReducer = combineReducers({
  todos: todoReducer,
  auth: authReducer,
  users: usersReducer
});

export default rootReducer;
