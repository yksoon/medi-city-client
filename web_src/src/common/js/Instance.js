import axios from "axios";

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
