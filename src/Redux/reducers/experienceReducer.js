import {
  GET_ALL_EXPERIENCE,
  GET_SINGLE_EXPERIENCE,
  POST_EXPERIENCE,
  DELETE_EXPERIENCE,
} from "../actions";

const initialState = {
  list: [],
  single: null,
};

const experienceReducer = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case GET_ALL_EXPERIENCE:
      console.log("experienceReducer");
      return {
        ...state,
        list: action.payload,
      };
    case GET_SINGLE_EXPERIENCE:
      return {
        ...state,
        single: action.payload,
      };
    case POST_EXPERIENCE:
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    /*    case PUT_EXPERIENCE:
      return {
        ...state,
        single: action.payload,
      }; */
    case DELETE_EXPERIENCE:
      return {
        ...state,
        list: state.list.filter((fav) => fav !== action.payload),
      };
    default:
      return state;
  }
};

export default experienceReducer;
