import axios from "axios";
import {
  setAuthLoading,
  setLoginError,
  setAuthSuccess,
  clearAuthData,
  setAuthToken,
} from "../actions/authActions";

export const login = (obj) => async (dispatch) => {
  try {
    dispatch(setLoginError(""));
    dispatch(setAuthLoading(false));
    if (!obj.email) {
      dispatch(setLoginError("Email is Required"));
      return;
    } else if (!obj.password) {
      dispatch(setLoginError("Password is Required"));
      return;
    } else if (obj.email !== "admin@gmail.com") {
      console.log(obj.email, "tk login");
      dispatch(setLoginError("Please Enter Valid Email"));
      return;
    } else if (obj.password !== "admin") {
      dispatch(setLoginError("Please Enter Valid Password"));
      return;
    }
    dispatch(setAuthLoading(true));
    const emails = "refresh_token";
    const passwords =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6ImRlZmF1bHQifQ.eyJqdGkiOiJVRktaN2NjaSIsImlzcyI6Imh0dHBzOi8vYWNjb3VudC5odWJzdGFmZi5jb20iLCJleHAiOjE3MTI3NDQ2NDEsImlhdCI6MTcwNDk2ODY0MSwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBlbWFpbCBodWJzdGFmZjpyZWFkIGh1YnN0YWZmOndyaXRlIn0.Bj3RVn6zHTPAwO9KCVaQGdXCNyFF3NhbfSsAQR3nsk5e225gaRxsL-nZbDdj-oEVPVnCIPtrTwt0MUqWvRSJ8gn1nTkyY7r6PqcUFadFCz30IBIZLon8o576HgtEtcu_2QLLw91aqL2bGEQ-3kfNoCVhy_66biAlH99InoLXDGdnl2hHgmvLjklksojWvZoc2Nv0ff3_lVRawAW5UpGlEJ6mFgpVHnzDVjJOPFiT1gVjWoQhpCjm1RvUshkNUDL120AnlDE-eF3XDYKw6iNiPtutLwkGzs_w0YMBqrmJGPOrrODItWdylmaYWQEFLU6fN8ad7nLcGpSluRG__38uwg";
    const response = await axios.post(
      `https://account.hubstaff.com/access_tokens?grant_type=${emails}&refresh_token=${passwords}`,
      {
        withCredentials: true,
      }
    );
    if (response.data.access_token) {
      dispatch(setAuthSuccess(response.data));
      console.log("sdadas", response.data);
      // dispatch(getOrganization(response.data));
      localStorage.setItem("auth_data", JSON.stringify(response.data));
      // localStorage.setItem("access_token", JSON.stringify(response.data));
      return response.data;
    } else {
      dispatch(setLoginError(response.message));
      console.log(response, "errr");
    }
  } catch (error) {
    console.log(error, "dsadas");
  }
};
export const logout = () => (dispatch) => {
  dispatch(clearAuthData());
};
