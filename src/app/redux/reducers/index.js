import { combineReducers } from "redux";
import { organizationReducer } from "./organizationReducer";
import { authReducer } from "./authReducer";
import { userReducer } from "./userReducer";

const appReducer = combineReducers({
  organization: organizationReducer,
  auth: authReducer,
  userlist: userReducer,
});

export default appReducer;
