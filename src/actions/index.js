import { SAVE_COMMENT, CHANGE_AUTH } from "actions/types";

export const saveComment = comment => ({
  type: SAVE_COMMENT,
  payload: comment,
});

export const changeAuth = isLoggedIn => ({
  type: CHANGE_AUTH,
  payload: isLoggedIn,
});
