import * as Actions from "./types";

export const setAuthSuccess = (response) => (dispatch) =>
  dispatch({ type: Actions.SET_AUTH_SUCCESS, payload: response });

export const setLoginError = (err) => (dispatch) =>
  dispatch({ type: Actions.SET_AUTH_ERROR, payload: err });

export const setAuthLoading = (loading) => (dispatch) =>
  dispatch({ type: Actions.SET_AUTH_LOADING, payload: loading });

export const clearAuthData = () => (dispatch) => {
  dispatch({ type: Actions.SET_AUTH_CLEAR });
};
