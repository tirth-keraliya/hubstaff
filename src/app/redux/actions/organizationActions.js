import axios from "axios";
import {
  SET_ORGANIZATION_LIST,
  SET_ORGANIZATION_FAIL,
} from "../constansts/organizationConstansts.js";

export const organizationActions = () => async (dispatch) => {
  const token = JSON.parse(localStorage.getItem("accesstoken"));
  try {
    const { data } = await axios.get(
      "https://api.hubstaff.com/v2/organizations",
      {
        headers: {
          Authorization: `Bearer ${token.access_token}`,
        },
      }
    );
    dispatch({ type: SET_ORGANIZATION_LIST, payload: data });
  } catch (error) {
    dispatch({
      type: SET_ORGANIZATION_FAIL,
      payload:
        error.data && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
