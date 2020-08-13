import React from "react";
import { shallow } from "enzyme";
import App from "components/App";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";

let component;

beforeEach(() => {
  component = shallow(<App />);
});

it("shows a component box", () => {
  expect(component.find(CommentBox).length).toEqual(1); // .find()回傳一個Array
});

it("shows a component list", () => {
  expect(component.find(CommentList).length).toEqual(1);
});
