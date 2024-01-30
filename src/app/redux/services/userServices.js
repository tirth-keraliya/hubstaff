import axios from "axios";
import { setUserList } from "../actions/userAction.js";

export const userlistServices = (access_token) => async (dispatch) => {
  try {
    const {
      data: { user },
    } = await axios.get("https://api.hubstaff.com/v2/users/me", {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    console.log("loveone", user);
    dispatch(setUserList(user));
  } catch (error) {
    console.log("error", error);
  }
};

// export const setOrganizationDetails = (data) => {
//   dispatch({ type: SET_ORGANIZATION_LIST, payload: data });
// };
