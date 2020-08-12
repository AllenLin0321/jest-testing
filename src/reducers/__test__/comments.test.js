import commentsReducer from "reducers/comments";
import { SAVE_COMMENT } from "actions/types";

it("handles actions of type SAVE_COMMENT", () => {
  const samplePayload = "new comment";

  const action = {
    type: SAVE_COMMENT,
    payload: samplePayload,
  };

  const newState = commentsReducer([], action);
  expect(newState).toEqual([samplePayload]);
});

it("handles action with unknown type", () => {
  const newState = commentsReducer([], { type: "UNKNOW_TYPE" });
  expect(newState).toEqual([]);
});
