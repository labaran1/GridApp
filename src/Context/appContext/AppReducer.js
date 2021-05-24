import {} from "../types";

const AppReducer = (state, action) => {
  switch (action.type) {
    case "": {
      return {
        ...state,
        imageHasLoad: action.payload.val,
      };
    }

    default:
      break;
  }
};

export default AppReducer;
