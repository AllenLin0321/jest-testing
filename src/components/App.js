import React from "react";
import { Route } from "react-router-dom";
import ComponentBox from "./CommentBox";
import ComponentList from "./CommentList";

const App = () => {
  return (
    <div>
      <ComponentBox />
      <ComponentList />
      {/* <Route path="/post" component={ComponentBox} />
      <Route path="/" exact component={ComponentList} /> */}
    </div>
  );
};

export default App;
