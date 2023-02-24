import { GET_USER, POST_PROFILE_PIC, UPDATE_USER,USER_ERROR,USER_LOADING } from "../actions";

const initialState = {
  user: [],
  isLoading:false,
  isError:false
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        user: action.payload,
      };
      case USER_LOADING:
          return{
           ...state,
           isLoading:action.payload
          }
          case USER_ERROR:
            return{
              ...state,
              isError:action.payload
            }
      case UPDATE_USER:
        return{
          ...state,
          user:action.payload
        }
        case POST_PROFILE_PIC:
          return{
            ...state,
            user:action.payload
          }
    default:
      return state;
  }

};

export default userReducer;
