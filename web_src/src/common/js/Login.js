import { React, useEffect } from "react";
import { apiPath } from "webPath";
import axios from "axios";
import Instance from "./Instance";

const url = apiPath.api_login;

function Login() {
  useEffect(() => {
    Instance.post(url, {
      signup_type: "000",
      user_id: "hery2@medi-city.co.kr",
      user_pwd: "1234qwer!@",
    })
      .then(function (response) {
        // response
        console.log(response);
        let user_info;
        let result_code = response.headers.result_code;

        if (result_code === "0000") {
          user_info = response.data.result_info;
          localStorage.setItem("userInfo", user_info);
        }
      })
      .catch(function (error) {
        // 오류발생시 실행
        console.log(error);
      });
  }, []);
}

export default Login;
