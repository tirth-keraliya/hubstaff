import {
  SET_ORGANIZATION_DETAIL,
  SET_ORGANIZATION_FAIL,
  SET_ORGANIZATION_LIST,
} from "../actions/types";

const initalState = {
  user: [],
  loading: false,
  selectedOrganization: {
    members: [],
  },
};
const storedOrganization = JSON.parse(
  localStorage.getItem("organization_data")
);

export const organizationReducer = (
  state = storedOrganization || initalState,
  action
) => {
  switch (action.type) {
    case SET_ORGANIZATION_LIST:
      return { loading: false, users: action.payload };
    case SET_ORGANIZATION_FAIL:
      return { loading: false, error: action.payload };
    case SET_ORGANIZATION_DETAIL:
      const newStateWithDetail = {
        ...state,
        loading: false,
        selectedOrganization: {
          members: action.members,
        },
      };
      localStorage.setItem(
        "organization_data",
        JSON.stringify(newStateWithDetail)
      );
      return newStateWithDetail;
    default:
      return state;
  }
};
