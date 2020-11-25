import React from "react";
import { connect } from "react-redux";

export default ChildComponent => {
  class ComposedComponent extends React.Component {
    static displayName = "requireAuthHOC";

    componentDidMount() {
      this.shouldNavigateAway();
    }

    componentDidUpdate() {
      this.shouldNavigateAway();
    }

    shouldNavigateAway = () => {
      if (!this.props.auth) {
        this.props.history.push("/");
      }
    };

    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  const mapStateToProps = state => ({
    auth: state.auth,
  });

  return connect(mapStateToProps)(ComposedComponent);
};
