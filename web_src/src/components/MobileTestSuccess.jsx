import { CircularProgress } from "@mui/material";
import { RestServer } from "common/js/Rest";
import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const MobileTestSuccess = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const queryList = [...searchParams];

    useEffect(() => {
        certChk();
    }, []);

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

                console.log(resData);
                alert("인증 완료");
            })
            .catch((error) => {
                // 오류발생시 실행
                console.log(error);
                alert("에러");
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
