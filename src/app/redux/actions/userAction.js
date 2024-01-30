import { SET_USER_DATA } from "./types";

export const setUserList = (data) => (dispatch) => {
  dispatch({ type: SET_USER_DATA, payload: data });
};
