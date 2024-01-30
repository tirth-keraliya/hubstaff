import { SET_USER_DATA } from "../actions/types";

const initalState = { user: [], loading: false, selectedOrganization: {} };

export const userReducer = (state = initalState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return { loading: false, users: action.payload };
    default:
      return state;
  }
};
