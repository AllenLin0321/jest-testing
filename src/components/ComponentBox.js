import React from "react";
import { connect } from "react-redux";
import * as actions from "actions";

class ComponentBox extends React.Component {
  state = { comment: "" };

  onInputChange = e => {
    this.setState({ comment: e.target.value });
  };

  onFormSubmit = e => {
    e.preventDefault();
    // this.props.saveComment(this.state.comment);
    this.setState({ comment: "" });
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <h4>Add a Comment</h4>
        <textarea value={this.state.comment} onChange={this.onInputChange} />
        <div>
          <button>Submit Comment</button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return { comments: state.comments };
};

export default connect(null, actions)(ComponentBox);
