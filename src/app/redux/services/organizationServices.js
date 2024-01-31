import axios from "axios";
import {
  setOrganizationDetails,
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
export const organizationListServices =
  (id, access_token) => async (dispatch) => {
    try {
      const { data } = await axios.get(
        `https://api.hubstaff.com/v2/organizations/${id}/members`,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      );
      console.log("orgdetails", data.members);
      dispatch(setOrganizationDetails(data.members)); // Update to dispatch the entire data object
    } catch (error) {
      console.log(error);
    }
  };
