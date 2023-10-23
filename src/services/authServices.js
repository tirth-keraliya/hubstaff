/**
 * @desc Login - Get User Token
 * @param {*} obj Data Obj
 */

export const login = (obj) => async (dispatch) => {
  try {
    dispatch(clearResponseMessage(""));
    dispatch(setAuthValidationError(""));
    if (!obj) {
      dispatchAuthValidationError("Username is Required", dispatch);
      return;
    } else if (!obj.username) {
      dispatchAuthValidationError("Username is Required", dispatch);
      return;
    } else if (!obj.password) {
      dispatchAuthValidationError("Password is Required", dispatch);
      return;
    }
    dispatch(setAuthLoader(true));
    const headers = {
      "Content-Type": "application/x-www-form-urlencoded",
    };
    const response = await axios.post(
      `${"https://account.hubstaff.com/access_tokens?"}/token`,
      qs.stringify(obj),
      {
        headers: headers,
        withCredentials: true,
      }
    );
    const { data } = response;
    if (data) {
      trackLoginAnalyticActivity();
      dispatch(setLoginDetail(data));
      const result = await dispatch(appInit());
      return result;
    }
  } catch (e) {
    dispatchAuthError(
      getAPIErrorReason(e) || "Unable to login please try again",
      dispatch
    );
    return false;
  } finally {
    dispatch(setAuthLoader(false));
  }
};
