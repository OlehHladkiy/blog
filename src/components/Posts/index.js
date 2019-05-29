import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Spin from "antd/lib/spin";
import Posts from "./Posts.jsx";
import Empty from "./Empty";
import { getPosts, deletePost } from "../../store/actions/postActions";

class PostsContainer extends Component {
  componentDidMount() {
    this.props.getPosts();
  }

  redirectToPostHandler = (id) => {
    this.props.history.push(`/post/${id}`);
  }

  render() {
    return (
      <Spin spinning={this.props.isFetching} size="large" >
        {
          this.props.posts.length === 0
            ? <Empty />
            : <Posts
                posts={this.props.posts}
                deletePostHandler={this.props.deletePost}
                redirectToPostHandler={this.redirectToPostHandler}
              />
        }
      </Spin>
    );
  }
}

PostsContainer.propTypes = {
  posts: PropTypes.array,
  history: PropTypes.object,
  getPosts: PropTypes.func,
  deletePost: PropTypes.func,
  isFetching: PropTypes.bool,
};

const mapStateToProps = state => ({
  posts: state.post.posts,
  isFetching: state.post.isFetching,
});

export default connect(
  mapStateToProps,
  { getPosts, deletePost },
)(PostsContainer);
