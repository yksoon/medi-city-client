import { CircularProgress } from "@mui/material";
import { RestServer } from "common/js/Rest";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

let resultCode;
const MobileTestSuccess = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const queryList = [...searchParams];

    resultCode = useSelector((state) => state.codes.resultCode);

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
                    closeWindow();
                } else {
                    alert("에러");
                    closeWindow();
                }
            })
            .catch((error) => {
                // 오류발생시 실행
                console.log(error);
                // localStorage.removeItem("certification_idx");
                let err = error.response.headers.result_code;
                // console.log(err);

                for (let i = 0; i < resultCode.length; i++) {
                    if (resultCode[i].result_code === err) {
                        let msg = resultCode[i].result_message_ko;
                        console.log(msg);
                        alert(msg);
                    }
                }
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
