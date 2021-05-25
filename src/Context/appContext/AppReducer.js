import { SET_AUTHENTICATED } from "../types";

const AppReducer = (state, action) => {
  switch (action.type) {
    case SET_AUTHENTICATED: {
      return {
        ...state,
        isAuthenticated: action.payload.val,
      };
    }

    default:
      break;
  }
};

export default AppReducer;
