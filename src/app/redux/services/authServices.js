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
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6ImRlZmF1bHQifQ.eyJqdGkiOiJVRkthcXBGSSIsImlzcyI6Imh0dHBzOi8vYWNjb3VudC5odWJzdGFmZi5jb20iLCJleHAiOjE3MTQ0NjE4MTMsImlhdCI6MTcwNjY4NTgxMywic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBlbWFpbCBodWJzdGFmZjpyZWFkIGh1YnN0YWZmOndyaXRlIn0.FLevy6ZQcczwwvCu2e8Zm7PswoyPRwPFa8rjpiKLH6ESk23aUa-iQSOtN9AAcL7IQAxRbe72VsEV5nwrKUWECCeXWOgkIlmW-AMWCwbzHsWAQsbiWyP0gv3Haodyewdi_BQplI6JwaQKkFd7xBSu7evV-6-wYfRfGF83P0h5TT1uWYaHkzeM32kXNZlTmbQKFDx2fXovDrjeKrvNsgpsNImkDL_R3zMsu1SUeuSRC-AstTMl2xosRYAJ5O3rJzgslmRtx5haME7py6duytiJ5yT_NpgZsHTjvfjy-qZIa0ELCKhiRGdo66N5Ac5ee1mRqY0nViYymrnkl41iODX6vg";
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
