import * as Actions from "../actions/types";
import { combineReducers } from "redux";
const { createReducer } = require("@reduxjs/toolkit");

const authValidationErrorReducer = createReducer({
  intialState: null,
  actionType: Actions.SET_AUTH_VALIDATION_ERRORS,
});

const authReducer = combineReducers({
  validationError: authValidationErrorReducer,
});
