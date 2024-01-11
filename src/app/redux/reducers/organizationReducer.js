import {
  SET_ORGANIZATION_FAIL,
  SET_ORGANIZATION_LIST,
  UPDATE_SELECTED_ORGANIZATION,
} from "../actions/types";

const initalState = { user: [], loading: false, selectedOrganization: {} };

export const organizationReducer = (state = initalState, action) => {
  switch (action.type) {
    case SET_ORGANIZATION_LIST:
      return { loading: false, users: action.payload };
    case SET_ORGANIZATION_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
