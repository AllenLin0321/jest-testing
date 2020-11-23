import axios from "axios";
import { SAVE_COMMENT, CHANGE_AUTH, FETCH_COMMENTS } from "actions/types";

export const saveComment = comment => ({
  type: SAVE_COMMENT,
  payload: comment,
});

export const fetchComments = async () => {
  const res = axios.get("http://jsonplaceholder.typicode.com/comments");
  return {
    type: FETCH_COMMENTS,
    payload: res,
  };
};

export const changeAuth = isLoggedIn => ({
  type: CHANGE_AUTH,
  payload: isLoggedIn,
});
