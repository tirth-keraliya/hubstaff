import { SET_ORGANIZATION_FAIL, SET_ORGANIZATION_LIST } from "./types";

export const setOrganizationList = (data) => (dispatch) => {
  dispatch({ type: SET_ORGANIZATION_LIST, payload: data });
};
export const setOrganizationFail = (data) => (dispatch) => {
  dispatch({ type: SET_ORGANIZATION_FAIL, payload: data });
};

// export const setLoginError = (err) => (dispatch) =>
//   dispatch({ type: Actions.SET_AUTH_ERROR, payload: err });

// export const setAuthLoading = (loading) => (dispatch) =>
//   dispatch({ type: Actions.SET_AUTH_LOADING, payload: loading });

// export const clearAuthData = () => (dispatch) => {
//   dispatch({ type: Actions.SET_AUTH_CLEAR });
// };
