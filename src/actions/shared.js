import { getInitialData } from "../utils/api";
import { receiveUsers } from "../actions/users";
import { receiveTweets } from "../actions/tweets";
import { setAuthUser } from "../actions/authUser";

const AUTH_ID = "rashmimanandhar";

export function handleInitialData() {
  return dispatch => {
    return getInitialData().then(({ users, tweets }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveTweets(tweets));
      dispatch(setAuthUser(AUTH_ID));
    });
  };
}
