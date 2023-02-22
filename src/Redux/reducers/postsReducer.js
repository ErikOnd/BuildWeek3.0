import { GET_POSTS, POST_POSTS, DELETE_POSTS } from "../actions";

const initialState = {
  posts: [],
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
      };

    case POST_POSTS:
      console.log(POST_POSTS);
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };

    case DELETE_POSTS:
      return {
        ...state,
        posts: state.posts.filter((e) => e !== action.payload),
      };

    default:
      return state;
  }
};

export default postsReducer;
