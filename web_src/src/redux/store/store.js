import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "redux/reducers/index";
import { composeWithDevTools } from "redux-devtools-extension";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";

// const store = legacy_createStore(rootReducer, composeWithDevTools());
const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
    composeWithDevTools,
});

export default store;
