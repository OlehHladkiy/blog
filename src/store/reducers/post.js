import postActions from "../types";

const initialState = {
  posts: [],
  isFetching: null,
  currentPost: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case postActions.START_FETCHING:
      return { ...state, isFetching: true };
    case postActions.GET_POSTS_SUCCESS:
      return { ...state, isFetching: false, posts: action.posts };
    case postActions.GET_POST_DETAIL_SUCCESS:
      return { ...state, isFetching: false, currentPost: action.post };
    case postActions.CREATE_POST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        createSuccess: true,
        posts: [...state.posts, action.post],
      };
    case postActions.DELETE_POST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        posts: state.posts.filter(item => item.id !== action.id),
      };
    case postActions.ADD_COMMENT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        addCommentSuccess: true,
        currentPost: {
          ...state.currentPost,
          comments: [...state.currentPost.comments, action.comment],
        },
      };
    case postActions.RESET_SUCCESS_PROPS:
      return { ...state, addCommentSuccess: null, createSuccess: null };
    default:
      return state;
  }
}
