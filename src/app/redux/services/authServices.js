import axios from "axios";
import {
  setAuthLoading,
  setLoginError,
  setAuthSuccess,
  clearAuthData,
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
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6ImRlZmF1bHQifQ.eyJqdGkiOiJVRktaNS9CNiIsImlzcyI6Imh0dHBzOi8vYWNjb3VudC5odWJzdGFmZi5jb20iLCJleHAiOjE3MTI1OTg3NDUsImlhdCI6MTcwNDgyMjc0NSwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBlbWFpbCBodWJzdGFmZjpyZWFkIGh1YnN0YWZmOndyaXRlIn0.l1vbmCwPlkfAwX5QUHDjLd8fWPpK5JUutt84uiBdyhFTM59q26JMA68uExJh6BcIq7sucbSfmLFr-TffEL-W8EYpG5xxzvdzQn-M33i_t8UvMfdfSHvcXcWzmb7OZj8cC_ZtfskWfBXXy-hwA1z7pO2hxtH3acTt5nvIH1rR-DRag6n6eMF8YqOsyhMtYRFF7voYr2b84zRfGPoAAq9JkYfEdkiGmBnnYMDtUtv4mUXaFJDoEQtD5CWsthQSLt59hf2y_Y8lq979F5zNUAiT7FCGexEDtGLLV8Vqe8MFrpwstg3A6ub89rCjHXZHQJruqfm5PgKLZb6GWbp0qMuafg";
    const response = await axios.post(
      `https://account.hubstaff.com/access_tokens?grant_type=${emails}&refresh_token=${passwords}`,
      {
        withCredentials: true,
      }
    );
    if (response.data.access_token) {
      dispatch(setAuthSuccess(response.data));
      // dispatch(getOrganization(response.data));
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
