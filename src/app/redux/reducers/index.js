import { combineReducers } from "redux";
import { organizationReducer } from "./organizationReducer";
import { authReducer } from "./authReducer";

const appReducer = combineReducers({
  organization: organizationReducer,
  auth: authReducer,
});

export default appReducer;
