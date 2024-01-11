import axios from "axios";
import {
  setOrganizationFail,
  setOrganizationList,
} from "../actions/organizationActions";

export const organizationServices = (access_token) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      "https://api.hubstaff.com/v2/organizations",
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );
    console.log("ktk", data);
    dispatch(setOrganizationList(data));
  } catch (error) {
    dispatch(setOrganizationFail(error.message));
  }
};

// export const setOrganizationDetails = (data) => {
//   dispatch({ type: SET_ORGANIZATION_LIST, payload: data });
// };
