import axios from "axios";
import postActions from "../types";
import { linkApi } from "../api";

const startFetching = () => ({
  type: postActions.START_FETCHING,
});

const getPostSuccess = posts => ({
  type: postActions.GET_POSTS_SUCCESS,
  posts,
});

const resetSuccessProps = (dispatch) => {
  setTimeout(() => {
    dispatch({ type: postActions.RESET_SUCCESS_PROPS });
  }, 5000);
};

export const getPosts = () => (dispatch) => {
  dispatch(startFetching());
  axios.get(`${linkApi}/posts`)
    .then(req => dispatch(getPostSuccess(req.data)))
    .catch(err => console.error(err));
};

const createPostSuccess = post => ({
  type: postActions.CREATE_POST_SUCCESS,
  post,
});

export const createPost = dataToSubmit => (dispatch) => {
  dispatch(startFetching());
  axios.post(`${linkApi}/posts`, dataToSubmit)
    .then((req) => {
      dispatch(createPostSuccess(req.data));
      resetSuccessProps(dispatch);
    })
    .catch(err => console.error(err));
};

const deletePostSuccess = id => ({
  type: postActions.DELETE_POST_SUCCESS,
  id,
});

export const deletePost = id => (dispatch) => {
  dispatch(startFetching());
  axios.delete(`${linkApi}/posts/${id}`)
    .then(() => dispatch(deletePostSuccess(id)))
    .catch(err => console.error(err));
};

const getPostDetailSuccess = post => ({
  type: postActions.GET_POST_DETAIL_SUCCESS,
  post,
});

export const getPostDetail = id => (dispatch) => {
  dispatch(startFetching());
  axios.get(`${linkApi}/posts/${id}?_embed=comments`)
    .then(req => dispatch(getPostDetailSuccess(req.data)))
    .catch(err => console.error(err));
};

const addCommentSuccess = comment => ({
  type: postActions.ADD_COMMENT_SUCCESS,
  comment,
});

export const addComment = dataToSubmit => (dispatch) => {
  dispatch(startFetching());
  axios.post(`${linkApi}/comments`, dataToSubmit)
    .then((req) => {
      dispatch(addCommentSuccess(req.data));
      resetSuccessProps(dispatch);
    })
    .catch(err => console.error(err));
};
