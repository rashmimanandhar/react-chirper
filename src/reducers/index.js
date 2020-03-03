import { combineReducers } from "redux";
import { authUser } from "./authUser";
import { users } from "./users";
import { tweets } from "./tweets";

export default combineReducers({
  authUser,
  users,
  tweets
});
