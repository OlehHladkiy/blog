import React, { Component } from "react";
import PropTypes from "prop-types";
import AddComment from "./AddComment.jsx";

class AddCommentContainer extends Component {
  state = {
    value: "",
  };

  componentDidUpdate(prevProps) {
    if (prevProps.addCommentSuccess !== this.props.addCommentSuccess
        && this.props.addCommentSuccess) {
      this.resetValue();
    }
  }

  resetValue = () => {
    this.setState({ value: "" });
  }

  handleSubmit = () => {
    // eslint-disable-next-line no-useless-return
    if (!this.state.value) return;
    const newPost = {
      body: this.state.value,
      date: new Date(),
      postId: this.props.postId,
    };
    this.props.addComment(newPost);
  };

  onChangeHandler = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    return (
      <AddComment
        value={this.state.value}
        onChange={this.onChangeHandler}
        onSubmit={this.handleSubmit}
      />
    );
  }
}
AddCommentContainer.propTypes = {
  postId: PropTypes.number,
  addComment: PropTypes.func,
  addCommentSuccess: PropTypes.bool,
};

export default AddCommentContainer;
