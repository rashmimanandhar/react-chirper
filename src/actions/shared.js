import { getInitialData } from "../utils/api";
import { receiveUsers } from "../actions/users";
import { receiveTweets } from "../actions/tweets";
import { setAuthUser } from "../actions/authUser";
import { showLoading, hideLoading } from "react-redux-loading";

const AUTH_ID = "rashmimanandhar";

export function handleInitialData() {
  return dispatch => {
    dispatch(showLoading());
    return getInitialData().then(({ users, tweets }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveTweets(tweets));
      dispatch(setAuthUser(AUTH_ID));
      dispatch(hideLoading());
    });
  };
}
