// import { Route, Routes } from "react-router";
import { useEffect, useState } from "react";

import { apiPath, routerPath } from "webPath";
import { RestServer } from "common/js/Rest";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import {
    set_codes,
    set_result_code,
    set_country_bank,
} from "redux/actions/codesAction";
import { set_ip_info } from "redux/actions/ipInfoAction";

import Router from "./Router";
import { CommonAlert, CommonSpinner } from "common/js/Common";
import { set_alert } from "redux/actions/commonAction";

function App() {
    useEffect(() => {
        // localStorage.clear();

        getIpInfo();
        getResultCode();
        getCodes();
        getCountryBank();
        setInterval(getResultCode, 3600000);
        setInterval(getCodes, 3600000);

        // localStorage.clear();
    }, []);

    const dispatch = useDispatch();

    // Alert
    let alertOption = useSelector((state) => state.common.alert);

    const handleAlertClose = () => {
        let alertOption = {
            isAlertOpen: false,
            alertTitle: "",
            alertContent: "",
        };

        dispatch(set_alert(alertOption));
    };

    // Spinner
    let spinnerOption = useSelector((state) => state.common.spinner);

    // IP
    const getIpInfo = () => {
        let ip;

        axios
            .get("https://geolocation-db.com/json/")
            .then((res) => {
                ip = res.data.IPv4;
                dispatch(set_ip_info(ip));
            })
            .catch((error) => {
                ip = "";
                dispatch(set_ip_info(ip));
            });
    };

    // result code
    const getResultCode = () => {
        RestServer("get", apiPath.api_result, {})
            .then((response) => {
                console.log("result_code", response);

                dispatch(
                    set_result_code(JSON.stringify(response.data.result_info))
                );
            })
            .catch((error) => {
                // 오류발생시 실행
                console.log(decodeURI(error));
            });
    };

    // codes
    const getCodes = () => {
        RestServer("post", apiPath.api_codes, {
            code_types: [],
            exclude_code_types: ["COUNTRY_TYPE", "BANK_TYPE"],
        })
            .then((response) => {
                console.log("codes", response);

                dispatch(set_codes(JSON.stringify(response.data.result_info)));
            })
            .catch((error) => {
                // 오류발생시 실행
                console.log(decodeURI(error));
            });
    };

    // codes
    const getCountryBank = () => {
        RestServer("post", apiPath.api_codes, {
            code_types: ["COUNTRY_TYPE", "BANK_TYPE"],
            exclude_code_types: [],
        })
            .then((response) => {
                console.log("codesCountryBank", response);

                dispatch(
                    set_country_bank(JSON.stringify(response.data.result_info))
                );
            })
            .catch((error) => {
                // 오류발생시 실행
                console.log(decodeURI(error));
            });
    };

    return (
        <>
            <div className="wrap">
                <Router />
                <CommonAlert
                    handleAlertClose={handleAlertClose}
                    // handleAlert={handleAlert}
                    option={alertOption}
                />
                <CommonSpinner option={spinnerOption} />
            </div>
        </>
    );
}

export default App;
