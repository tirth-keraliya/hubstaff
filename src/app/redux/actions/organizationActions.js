import {
  SET_ORGANIZATION_DETAIL,
  SET_ORGANIZATION_FAIL,
  SET_ORGANIZATION_LIST,
} from "./types";

export const setOrganizationList = (data) => (dispatch) => {
  dispatch({ type: SET_ORGANIZATION_LIST, payload: data });
};
export const setOrganizationFail = (data) => (dispatch) => {
  dispatch({ type: SET_ORGANIZATION_FAIL, payload: data });
};
export const setOrganizationDetails = (data) => (dispatch) => {
  dispatch({ type: SET_ORGANIZATION_DETAIL, members: data });
};
