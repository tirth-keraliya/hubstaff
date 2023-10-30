import { combineReducers } from "redux";
import { organizationReducer } from "./organizationReducer";

const appReducer = combineReducers({
  organization: organizationReducer,
});

export default appReducer;
