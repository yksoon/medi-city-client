import { CircularProgress } from "@mui/material";
import { RestServer } from "common/js/Rest";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { set_cert_info } from "redux/actions/certAction";

let certInfo2;
const MobileTestSuccess = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const queryList = [...searchParams];

    const dispatch = useDispatch();

    certInfo2 = useSelector((state) => state.certInfo.certInfo);
    useEffect(() => {
        certChk();
    }, []);

    const closeWindow = () => {
        window.opener = null;
        window.open("", "_self");
        window.close();
    };

    const certChk = () => {
        let data = Object.fromEntries(queryList);

        let certification_idx = localStorage.getItem("certification_idx");
        data["certification_idx"] = certification_idx;

        const url =
            "http://dev-api.medi-city.co.kr:60000/account/v1/user/_cert";

        RestServer("put", url, data)
            .then((response) => {
                // console.log("authTest", response);

                let resData = response.data.result_info;
                let result_code = response.headers.result_code;

                console.log(resData);

                if (result_code === "0000") {
                    dispatch(set_cert_info(JSON.stringify(resData)));
                    // localStorage.removeItem("certification_idx");

                    console.log(certInfo2);
                    // alert("인증 완료");
                    closeWindow();
                } else {
                    // alert("에러");
                    // localStorage.removeItem("certification_idx");
                    closeWindow();
                }
            })
            .catch((error) => {
                // 오류발생시 실행
                console.log(error);
                // localStorage.removeItem("certification_idx");
                alert("에러");
                // closeWindow();
            });
    };

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                minHeight: "100vh",
            }}
        >
            <CircularProgress color="inherit" />
        </div>
    );
};

export default MobileTestSuccess;
