import React from "react";
import { connect } from "react-redux";

class ComponentList extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.comments.map((comment, index) => (
            <li key={index}>{comment}</li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { comments: state.comments };
};

export default connect(mapStateToProps)(ComponentList);
