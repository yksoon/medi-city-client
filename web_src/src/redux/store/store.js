import { legacy_createStore } from "redux";
// import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "redux/reducers/index";
import { composeWithDevTools } from "redux-devtools-extension";

const store = legacy_createStore(rootReducer, composeWithDevTools());

export default store;
