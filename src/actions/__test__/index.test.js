import { SAVE_COMMENT } from "actions/types";
import { saveComment } from "actions";

describe("saveComment", () => {
  it("has the corrent type", () => {
    const action = saveComment();
    expect(action.type).toEqual(SAVE_COMMENT);
  });

  it("has the corrent payload", () => {
    const samplePayload = "new comment";
    const action = saveComment(samplePayload);
    expect(action.payload).toEqual(samplePayload);
  });
});
