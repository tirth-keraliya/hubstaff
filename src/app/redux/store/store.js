"use client";

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import appReducer from "../reducers/index";

// initial states here
const initalState = {};

// middleware
const middleware = [thunk];

// creating store
const store = createStore(
  appReducer,
  initalState,
  composeWithDevTools(applyMiddleware(...middleware))
);
// assigning store to next wrapper
export default store;
