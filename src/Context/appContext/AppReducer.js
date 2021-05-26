import { SET_AUTHENTICATED, SET_SHAPES } from "../types";

const AppReducer = (state, action) => {
  switch (action.type) {
    case SET_AUTHENTICATED: {
      return {
        ...state,
        isAuthenticated: action.payload.val,
      };
    }
    case SET_SHAPES: {
      return {
        ...state,
        shapes: action.payload.val,
      };
    }

    default:
      break;
  }
};

export default AppReducer;
