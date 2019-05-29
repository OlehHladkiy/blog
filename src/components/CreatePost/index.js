import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import CreatePost from "./CreatePost.jsx";
import { createPost } from "../../store/actions/postActions";
import { Spin } from "./styled";

function CreatePostContainer({ isFetching, ...rest }) {
  return (
    <Spin spinning={isFetching} size="large">
      <CreatePost {...rest} />
    </Spin>
  );
}
CreatePostContainer.propTypes = {
  isFetching: PropTypes.bool,
};

const mapStateToProps = state => ({
  isFetching: state.post.isFetching,
  createSuccess: state.post.createSuccess,
});

export default connect(mapStateToProps, { createPost })(CreatePostContainer);
