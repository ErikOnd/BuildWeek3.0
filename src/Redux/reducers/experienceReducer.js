import {
  GET_ALL_EXPERIENCE,
  GET_SINGLE_EXPERIENCE,
  POST_EXPERIENCE,
  DELETE_EXPERIENCE,
  UPDATE_EXPERIENCE,
  POST_EXPERIENCE_PIC,
} from "../actions";

const initialState = {
  list: [],
  single: null,
  update: 0,
};

const experienceReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_EXPERIENCE:
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

    case UPDATE_EXPERIENCE:
      return {
        ...state,
        update: action.payload,
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
      case POST_EXPERIENCE_PIC:
        return{
          ...state,
          list: [...state.list, action.payload],
        }
    default:
      return state;
  }
};

export default experienceReducer;
