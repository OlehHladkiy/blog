import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getPostDetail, addComment } from "../../store/actions/postActions";
import Post from "./Post.jsx";

class PostContainer extends Component {
  componentDidMount() {
    this.props.getPostDetail(this.props.match.params.id);
  }

  render() {
    return (
      <Post
        {...this.props.currentPost}
        addComment={this.props.addComment}
        addCommentSuccess={this.props.addCommentSuccess}
      />
    );
  }
}

PostContainer.propTypes = {
  match: PropTypes.object,
  getPostDetail: PropTypes.func,
  addComment: PropTypes.func,
  currentPost: PropTypes.object,
  addCommentSuccess: PropTypes.bool,
};
PostContainer.defaultProps = {
  currentPost: {},
};

const mapStateToProps = state => ({
  currentPost: state.post.currentPost,
  addCommentSuccess: state.post.addCommentSuccess,
});

export default connect(
  mapStateToProps,
  { getPostDetail, addComment },
)(PostContainer);
