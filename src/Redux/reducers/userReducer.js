import { GET_USER, POST_PROFILE_PIC, UPDATE_USER } from "../actions";

const initialState = {
  user: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        user: action.payload,
      };

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
