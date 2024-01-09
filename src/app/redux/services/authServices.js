import axios from "axios";
import {
  setAuthLoading,
  setLoginError,
  setAuthSuccess,
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
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6ImRlZmF1bHQifQ.eyJqdGkiOiJVRktaNklvRCIsImlzcyI6Imh0dHBzOi8vYWNjb3VudC5odWJzdGFmZi5jb20iLCJleHAiOjE3MTI2MDM3OTMsImlhdCI6MTcwNDgyNzc5Mywic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBlbWFpbCBodWJzdGFmZjpyZWFkIGh1YnN0YWZmOndyaXRlIn0.vRDtvDYQBdfyMUT_cWoOw13R0aihBec8D_NGxOGGewsbI8SYmJ2ea2l1O-fjH1vrw1knjmDUjUp0FodqNGz2MIdll-YFBSkeUoo9hzhTTk9XXDQyP6GjHprqve-ZGCf4CRTL_yKuNDavHPGoIivgMFcDyqq4f4zx83I0eLZu7pQgu4rHn4ia7R9a3HNkOo9JkyuHIOVZBW64vZmqF6k56odeVm4swLOJRvtRhCBUbbNilVwOk9Yr1NN9snYmmQ1V80OZuE4u971kpEfSje8kiRaoxXFg8O4tjaj5aksFckO6-0oQg8GdpxZ9lRbkHMTR2RPWxjrn9pMmZNJF-Gf0rQ";
    const response = await axios.post(
      `https://account.hubstaff.com/access_tokens?grant_type=${emails}&refresh_token=${passwords}`,
      {
        withCredentials: true,
      }
    );
    if (response.data.access_token) {
      dispatch(setAuthSuccess(response.data));
      return response.data;
    } else {
      dispatch(setLoginError(response.message));
      console.log(response, "errr");
    }
  } catch (error) {
    console.log(error, "dsadas");
  }
};
