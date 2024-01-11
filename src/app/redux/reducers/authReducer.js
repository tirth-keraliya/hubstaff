import {
  SET_AUTH_CLEAR,
  SET_AUTH_ERROR,
  SET_AUTH_LOADING,
  SET_AUTH_SUCCESS,
  SET_AUTH_TOKEN,
} from "../actions/types";

const initalState = { loading: false, errorMessage: "", tokens: {} };

export const authReducer = (state = initalState, action) => {
  // console.log("action--action", action);
  switch (action.type) {
    case SET_AUTH_SUCCESS:
      return { loading: false, errorMessage: "", tokens: action.payload };
    case SET_AUTH_LOADING:
      return { loading: action.payload, errorMessage: "" };
    case SET_AUTH_ERROR:
      return {
        loading: false,
        errorMessage: action.payload,
        tokens: {},
      };
    case SET_AUTH_CLEAR:
      localStorage.clear();
      return { loading: false, errorMessage: "", tokens: {} };
    default:
      return state;
  }
};
