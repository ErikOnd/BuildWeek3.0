import {
  GET_POSTS,
  POST_POSTS,
  DELETE_POSTS,
  REFRESH,
  ADD_LIKED,
  REMOVE_LIKED,
} from "../actions";

const initialState = {
  posts: [],
  liked: [],
  refresh: 0,
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
      };

    case POST_POSTS:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };

    case DELETE_POSTS:
      return {
        ...state,
        posts: state.posts.filter((e) => e !== action.payload),
      };

    case ADD_LIKED:
      return {
        ...state,
        liked: [...state.liked, action.payload],
      };

    case REMOVE_LIKED:
      return {
        ...state,
        liked: state.liked.filter((e) => e !== action.payload),
      };

    case REFRESH:
      return {
        ...state,
        refresh: action.payload,
      };

    default:
      return state;
  }
};

export default postsReducer;
