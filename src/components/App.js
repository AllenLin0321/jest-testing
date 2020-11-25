import React from "react";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "actions";

import ComponentBox from "./CommentBox";
import ComponentList from "./CommentList";

class App extends React.Component {
  renderButton = () => {
    if (this.props.auth) {
      return (
        <button onClick={() => this.props.changeAuth(false)}>Sign Out!</button>
      );
    } else {
      return (
        <button onClick={() => this.props.changeAuth(true)}>Sign In!</button>
      );
    }
  };

  renderHeader = () => {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post">Post</Link>
        </li>
        <li>{this.renderButton()}</li>
      </ul>
    );
  };

  render() {
    return (
      <div>
        <div>{this.renderHeader()}</div>
        <div>
          <Route path="/post" component={ComponentBox} />
          <Route path="/" exact component={ComponentList} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, actions)(App);
