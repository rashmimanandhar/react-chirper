export const RECEIVE_Users = "RECEIVE_Users";
//action creator
export function receiveUsers(users) {
  return {
    type: RECEIVE_Users,
    users
  };
}
