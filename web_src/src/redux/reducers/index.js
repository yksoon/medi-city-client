import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import codes from "./codes";
import userInfo from "./userInfo";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["userInfo"],
};

const rootReducer = combineReducers({
    codes,
    userInfo,
});

export default persistReducer(persistConfig, rootReducer);
