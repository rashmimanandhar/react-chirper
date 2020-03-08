import { saveLikeToggle } from "../utils/api";
export const RECEIVE_TWEETS = "RECEIVE_TWEETS";
export const TOGGLE_TWEET = "TOGGLE_TWEET";
//action creator
export function receiveTweets(tweets) {
  return {
    type: RECEIVE_TWEETS,
    tweets
  };
}

function toggleTweet({ id, authUser, hasLiked }) {
  return {
    type: TOGGLE_TWEET,
    id,
    authUser,
    hasLiked
  };
}

export function handleToggleTweet(info) {
  return dispatch => {
    dispatch(toggleTweet(info));
    return saveLikeToggle(info).catch(err => {
      console.warn("Error in handleToggleTweet: ", err);
      dispatch(toggleTweet(info));
      alert("There was an error while liking the tweet");
    });
  };
}
