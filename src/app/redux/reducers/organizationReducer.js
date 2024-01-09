import {
  SET_ORGANIZATION_LIST,
  SET_ORGANIZATION_FAIL,
} from "../constansts/organizationConstansts";

const initalState = { user: [] };

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
