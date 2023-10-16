import axios from "axios";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import store from "redux/store/store";

let ip;
let token;

const Instance = axios.create({
    headers: {
        "Content-Type": "application/json",
    },
    timeout: 5000,
});

// const userInfo;
Instance.interceptors.request.use(
    (config) => {
        const recoilSession = JSON.parse(
            sessionStorage.getItem("recoilSession")
        );

        ip =
            recoilSession === null
                ? sessionStorage.getItem("ipInfo")
                : recoilSession.ipInfo;
        token = recoilSession === null ? "" : recoilSession.userToken;

        config.headers["Medipeople-Src"] = ip ? ip : "";
        config.headers["Medipeople-Token"] = token ? token : "";
        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
);

export { Instance };
