import axios from "axios";
import { setAuthValidationError } from "../actions/authActions";
import { NEXT_APP_APIURL } from "@/app/global/environment";
import { ROUTE } from "../constansts/routeConst";

export const login = (obj) => async (dispatch) => {
  console.log("tk", obj);
  try {
    dispatch(clearResponseMessage(""));
    dispatch(setAuthValidationError(""));
    if (obj.email) {
      dispatchAuthValidationError("Email is Required");
      return;
    } else if (obj.password) {
      dispatchAuthValidationError("Password is Required");
      return;
    } else if (obj.email !== "admin@gmail.com") {
      console.log(email, "tk login");
      dispatchAuthValidationError("Please Enter Valid Email");
      return;
    } else if (obj.password !== "admin") {
      dispatchAuthValidationError("Please Enter Valid Password");
      return;
    }

    axios
      .post(
        `${NEXT_APP_APIURL}/access_tokens?grant_type=${obj.emails}&refresh_token=${obj.passwords}`,
        qs.stringify(obj),
        {
          headers: headers,
          withCredentials: true,
        }
      )
      .then((response) => {
        console.log(response, "test");
        saveTokenInLocalStorage(response.data);
      })
      .catch((error) => {
        console.log(error, "errr");
      });
  } catch {}
};

function dispatchAuthValidationError(msg, dispatch) {
  dispatch(setAuthValidationError(msg));
}
