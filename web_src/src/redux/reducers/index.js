import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
import storageSession from "redux-persist/lib/storage/session";

import codes from "./reducers/codes";
import userInfo from "./reducers/userInfo";
import ipInfo from "./reducers/ipInfo";
import certInfo from "./reducers/cert";

const persistConfig = {
    key: "root",
    storage: storageSession,
    whitelist: ["userInfo", "certInfo"],
};

const rootReducer = combineReducers({
    codes,
    userInfo,
    ipInfo,
    certInfo,
});

export default persistReducer(persistConfig, rootReducer);
