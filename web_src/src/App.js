// import { Route, Routes } from "react-router";
import { useEffect, useState } from "react";

import { apiPath, routerPath } from "webPath";
import { RestServer } from "common/js/Rest";
import axios from "axios";

import { useDispatch } from "react-redux";
import {
    set_codes,
    set_result_code,
    set_country_bank,
} from "redux/actions/codesAction";
import { set_ip_info } from "redux/actions/ipInfoAction";

import NotFoundPage from "NotFoundPage";
import Main from "components/Main/Main";
import MyPageMain from "components/MyPage/MyPage/MyPageMain";
import SignUpMain from "components/SignUp/SignUpMain";
import SignUpOk from "components/SignUp/SignUpOk";
import TermsMain from "components/TermPrivacy/TermMain";
import PrivacyMain from "components/TermPrivacy/PrivacyMain";
import FindIdMain from "components/FindAccount/FindID/FindIDMain";
import FindPWMain from "components/FindAccount/FindPW/FindPWMain";
import MobileTest from "components/MobileTest";
import MobileTestSuccess from "components/MobileTestSuccess";

import Router from "./Router";

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

    const [isOpen, setIsOpen] = useState(false);

    const isOpenHandler = (status) => {
        setIsOpen(status);
    };

    const dispatch = useDispatch();

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
                console.log(error);
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
                console.log(error);
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
                console.log(error);
            });
    };

    return (
        <>
            <div className="wrap">
                <Router isOpenHandler={isOpenHandler} isOpen={isOpen} />;
            </div>
        </>
    );
}

export default App;
