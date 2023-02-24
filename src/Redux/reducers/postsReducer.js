import {
  GET_POSTS,
  POST_POSTS,
  DELETE_POSTS,
  ADD_LIKED,
  REMOVE_LIKED,
  POST_POST_PICTURE,
  GET_LOADING_POST,
  GET_ERROR_POST,
} from "../actions";

const initialState = {
  posts: [],
  liked: [],
  isLoading: true,
  isError: false,
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

    case GET_LOADING_POST:
      return {
        ...state,
        isLoading: action.payload,
      };

    case GET_ERROR_POST:
      return {
        ...state,
        isError: action.payload,
      };

    case POST_POST_PICTURE:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    default:
      return state;
  }
};

export default postsReducer;
