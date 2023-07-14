import * as React from "react";
import * as ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "redux/store/store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

// Bootstrap
// import "common/css/bootstrap.min.css";

import App from "./App";

import "common/css/default.css";
import "common/css/style.css";

const persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
