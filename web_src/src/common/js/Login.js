import { React, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { apiPath, routerPath } from "webPath";
import { RestServer } from "./Rest";
// import { Instance } from "./Instance";

const Login = (loginData) => {
    let navigate = useNavigate();

    const url = apiPath.api_login;

    let data = {
        signup_type: "000",
        user_id: loginData.user_id,
        user_pwd: loginData.user_pwd,
    };

    RestServer("post", url, data)
        .then(function (response) {
            // response
            console.log(">>>>>>>>>>>>>", response);
            let user_info;

            let result_code = response.headers.result_code;

            if (result_code === "0000") {
                user_info = response.data.result_info;
                console.log("***********", user_info);

                localStorage.clear();
                localStorage.setItem("userInfo", JSON.stringify(user_info));
            }
        })
        .then(navigate(routerPath.main_url))
        .catch(function (error) {
            // 오류발생시 실행
            console.log(error);
        });
};

export default Login;
